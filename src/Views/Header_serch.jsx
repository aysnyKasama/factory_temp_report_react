import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
    Box,
    TextField,
    Button,
    Typography,
    Grid,
    Autocomplete,
    Dialog,
    DialogTitle,
    DialogContent,
    Checkbox,
    FormControlLabel,
} from '@mui/material';

// 仮のデータ取得関数（実際にはAPIからデータを取得する）
const fetchApiData = async () => {
    return [
        { excelName: 'Excel1', supplierName: 'Supplier A', supplierCode: '001' },
        { excelName: 'Excel2', supplierName: 'Supplier B', supplierCode: '002' }
    ];
};

const Header = (props) => {
    const [startDate, setStartDate] = useState('');
    const [dayOfWeek, setDayOfWeek] = useState('');
    const [selectedExcel, setSelectedExcel] = useState('');
    const [selectedSupplier, setSelectedSupplier] = useState('');
    const [selectedSupplierCode, setSelectedSupplierCode] = useState('');
    const [apiData, setApiData] = useState([]);
    const [open, setOpen] = useState(false); // モーダルウィンドウの状態

    useEffect(() => {
        const init = async () => {
            const data = await fetchApiData();
            setApiData(data);
        };
        init();
    }, []);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box mb={4} className="header-component">
            <Typography variant="h6" mb={2}>検索条件</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        label="日付"
                        type="date"
                        fullWidth
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Autocomplete
                        options={apiData.map((option) => option.excelName)}
                        value={selectedExcel}
                        onChange={(event, newValue) => { 
                            setSelectedExcel(newValue);
                            props.onDataChange(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} label="エクセル名" />}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Autocomplete
                        options={apiData.map((option) => option.supplierName)}
                        value={selectedSupplier}
                        onChange={(event, newValue) => setSelectedSupplier(newValue)}
                        renderInput={(params) => <TextField {...params} label="取引先名" />}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        label="取引先コード"
                        fullWidth
                        value={selectedSupplierCode}
                        onChange={(e) => setSelectedSupplierCode(e.target.value)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" onClick={handleOpen}>
                        詳細検索
                    </Button>
                </Grid>
            </Grid>

            {/* モーダルウィンドウ */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>詳細検索条件</DialogTitle>
                <DialogContent>
                    {/* チェックボックスのリストなど、さらなる詳細検索条件をここに配置 */}
                    <FormControlLabel control={<Checkbox />} label="条件A" />
                    <FormControlLabel control={<Checkbox />} label="条件B" />
                    {/* 他の条件を追加 */}
                </DialogContent>
            </Dialog>
        </Box>
    );
};

Header.propTypes = {
    // Propsの型定義をここに追加
    onDataChange: PropTypes.func.isRequired,
};

export default Header;
