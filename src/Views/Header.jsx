import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
    Box,
    TextField,
    Button,
    Typography,
    Grid, Autocomplete ,
    Dialog, DialogTitle, DialogContent,  // ダイアログ用
    Checkbox, FormControlLabel, // チェックボックス用
} from '@mui/material';

// import { orderData5 } from '../data/orderData.ts';                            // 発注データaaa

const daysOfWeek = ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'];

const Header = ({ onPerPageChange, orderData, ingredientVisibility, setIngredientVisibility, setOrderData }) => {
    const [startDate, setStartDate] = useState('');
    const [dayOfWeek, setDayOfWeek] = useState('');
    const [isLoading, setIsLoading] = useState(false);  // New state for loading
    const [perPageIngredients, setPerPageIngredients] = useState(10); // Initial value set to 10
    
    const [selectedExcel, setSelectedExcel] = useState('');  // 選択されたエクセル名を管理するためのstate
    const [selectedSupplier, setSelectedSupplier] = useState(null);
    const [selectedSupplierCode, setSelectedSupplierCode] = useState('');
    const [ordererName, setOrdererName] = useState('');  // 発注者名を管理するためのstate

    const [apiData, setApiData] = useState([]);  // APIから取得したデータを格納するための状態
     // 開始日が変更されたときにAPIを叩く
     useEffect(() => {
        if (startDate) {
            const fetchApiData = async () => {
                try {
                    const formattedDate = startDate.split('-').join('');
                    const response = await axios.get(`http://192.168.102.70:8000/api/v1/purchase/serch/${formattedDate}`);
                    setApiData(response.data);
                } catch (error) {
                    console.error("Error fetching the API data:", error);
                }
            };

            fetchApiData();
            
            const date = new Date(startDate);
            setDayOfWeek(daysOfWeek[date.getUTCDay()]);
        }
    }, [startDate]);

    // ----------------------------------   モーダルウィンドウの定義   ----------------------------------
    const [open, setOpen] = useState(false);  // モーダルの開閉を管理するステート
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // フィルタリングされた取引先名のリストを取得
    const filteredSuppliers = selectedExcel 
        ? apiData.filter(pair => pair.excelName === selectedExcel)
        : apiData;
    useEffect(() => {
        if (startDate) {
            const date = new Date(startDate);
            setDayOfWeek(daysOfWeek[date.getUTCDay()]);
        }
    }, [startDate]);

    // selectedSupplierCodeが変更されたときにAPIを叩く
    useEffect(() => {
        if (selectedSupplierCode) {
            const fetchApiData = async () => {
                try {
                    const formattedDate = startDate.split('-').join('');
                    // const response = await axios.get(`http://192.168.102.70:8000/api/v1/purchase/order_week/${formattedDate}/${selectedSupplierCode}/aaa`);
                    const ordererNameForApi = ordererName ? ordererName : '　';
                    const response = await axios.get(`http://192.168.102.70:8000/api/v1/purchase/order_week/${formattedDate}/${selectedSupplierCode}?order_name=${ordererNameForApi}`);

                    // response.dataにorder_listの要素があるかどうか
                    if (response.data.order_list) {
                        console.log('order_listの要素がある');
                        setOrderData(response.data);    // APIから取得したデータをセット
                    }else{
                        console.log('order_listの要素がない');
                        // setOrderData(orderData5);   // ダミーデータをセット
                    }
                }
                catch (error) {
                    console.error("Error fetching the API data:", error);
                }
            };

            fetchApiData();
        }
    }, [selectedSupplierCode, startDate]);

    // 「1ページ当たりの原料数」が変更されたとき 非同期処理を行う
    const handlePerPageChange = async (e) => {
        const value = parseInt(e.target.value, 10);

        // 入力値が1から10の範囲外の場合、処理をスキップする
        if (value < 1 || value > 10) {
            return;
        }

        setIsLoading(true);  // Start loading
        setPerPageIngredients(value);
        await new Promise(resolve => setTimeout(resolve, 100));     // ここで少し待機させ、ロード状態の変更を模擬します（実際には不要）
        onPerPageChange(value);
        setIsLoading(false);  // End loading
    };

    const dayStyles = {
        '日曜日': { background: 'linear-gradient(45deg, #FFFFFF, #FF5656)' },   // グラデーション赤
        '月曜日': { background: 'linear-gradient(45deg, #FFFFFF, #392D6B)' },   // グラデーション宇宙色
        '火曜日': { background: 'linear-gradient(45deg, #FFFFFF, #FFA0A0)' },   // グラデーション薄い赤
        '水曜日': { background: 'linear-gradient(45deg, #A7EEFA, #409BE5)' },   // グラデーション海の青
        '木曜日': { background: 'linear-gradient(45deg, #FFFFFF, #AC6500)' },   // グラデーション木のブラウン
        '金曜日': { background: 'linear-gradient(45deg, #FFD700, #FFD700)' },   // グラデーション金のイエロー
        '土曜日': { background: 'linear-gradient(45deg, #FFFFFF, #A5A5FF)' },   // グラデーション薄い青
    };

    return (
        <Box mb={4} className="header-component">
            <Typography variant="h5" mb={3}>
                設定
            </Typography>
            {isLoading ? (
                <div className="loading-overlay">
                    <p>処理中...</p>
                </div>
            ) : null}


            {/* エクセル名、取引先名、取引先コードのセクション */}
            <Box mb={2}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Autocomplete
                            // options={Array.from(new Set(searchPairs.map(pair => pair.excelName)))} // 重複を削除
                            options={Array.from(new Set(apiData.map(pair => pair.excelName)))} // 重複を削除
                            value={selectedExcel}
                            onChange={(event, newExcel) => {
                                setSelectedExcel(newExcel);
                                setSelectedSupplier(null); // Excel名が変更されたときに取引先名をリセット
                            }}
                            renderInput={(params) => (
                                <TextField 
                                    {...params}
                                    label="エクセル名"
                                    variant="outlined"
                                    fullWidth
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Autocomplete
                            options={filteredSuppliers.map(pair => pair.supplierName)}
                            value={selectedSupplier}
                            onChange={(event, newValue) => {
                                setSelectedSupplier(newValue);
                                const matchedPair = apiData.find(pair => pair.supplierName === newValue);
                                setSelectedSupplierCode(matchedPair ? matchedPair.supplierCode : '');
                            }}
                            renderInput={(params) => (
                                <TextField 
                                    {...params}
                                    label="取引先名"
                                    variant="outlined"
                                    fullWidth
                                />
                            )}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <TextField 
                            label="取引先コード"
                            variant="outlined"
                            fullWidth
                            value={selectedSupplierCode}
                            onChange={(e) => {
                                // 数字のみを許可し、最大5桁までの入力を制限
                                const val = e.target.value;
                                if (val.length <= 5 && /^[0-9]*$/.test(val)) {
                                    setSelectedSupplierCode(val);
                                }
                            }}
                            inputProps={{
                                maxLength: 5, // 最大5桁
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <TextField 
                            label="発注者名"
                            variant="outlined"
                            fullWidth
                            value={ordererName}
                            onChange={(e) => setOrdererName(e.target.value)} // 入力が変更されたら状態を更新する                        
                        />
                    </Grid>
                </Grid>
            </Box>

            {/* 開始日と開始曜日のセクション */}
            <Box mb={2}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <TextField
                            label="開始日"
                            type="date"
                            fullWidth
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <TextField
                            label="開始曜日"
                            value={dayOfWeek}
                            InputProps={{
                                readOnly: true,
                                style: dayStyles[dayOfWeek] || {}  // 曜日に応じてスタイルを設定
                            }}
                            variant="outlined"
                            fullWidth
                        />
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <TextField 
                            label="1ページ当たりの原料数"
                            variant="outlined"
                            type="number"
                            fullWidth
                            value={perPageIngredients}
                            onChange={handlePerPageChange}
                            inputProps={{ 
                                min: 1, 
                                max: 10,
                                onKeyDown: (event) => {
                                    if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
                                        event.preventDefault();
                                    }
                                },
                            }}
                            onWheel={e => e.preventDefault()} 
                            error={perPageIngredients < 1 || perPageIngredients > 10}  
                            helperText={perPageIngredients < 1 || perPageIngredients > 10 ? "1から10までの整数を入力してください。" : ''} 
                        />
                    </Grid>
                    
                    <Grid item xs={12} sm={12} md={3}>
                        <Button variant="contained" color="secondary" fullWidth onClick={handleOpen}>
                            原料表示選択
                        </Button>
                    </Grid>

                    {/* モーダルウィンドウの定義 */}
                    <Dialog open={open} onClose={handleClose} aria-labelledby="material-dialog-title">
                        <DialogTitle id="material-dialog-title">原料表示選択</DialogTitle>
                        <DialogContent>
                            {orderData && orderData.order_list ? (
                                orderData.order_list.map(ingredient => (
                                    <FormControlLabel
                                        key={ingredient.info.i_name}
                                        control={
                                            <Checkbox
                                                checked={ingredientVisibility[ingredient.info.i_name] || false}
                                                onChange={(e) => {
                                                    setIngredientVisibility(prevState => ({
                                                        ...prevState,
                                                        [ingredient.info.i_name]: e.target.checked
                                                    }));
                                                }}
                                                name={ingredient.info.i_name}
                                            />
                                        }
                                        label={`${ingredient.info.i_code} - ${ingredient.info.i_name}`}  // 原料コードと原料名を組み合わせて表示
                                    />
                                ))
                            ) : null}
                        </DialogContent>
                    </Dialog>
                </Grid>
            </Box>
        </Box>
    );
}

// プロパティの型を定義（適切なプロップ型を追加する）
Header.propTypes = {
    onPerPageChange: PropTypes.func.isRequired,
    orderData: PropTypes.object.isRequired,
    setOrderData: PropTypes.func.isRequired  // 追加
  };

export default Header;
