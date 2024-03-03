import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    TextField,
    Typography,
    Grid,
    Autocomplete,
} from '@mui/material';

const HeaderSearch = ({ onDeviceChange, DeviceList,selectedDevice,setSelectedDevice,　selectedDate,setSelectedDate }) => {
    const selectedDeviceInfo = DeviceList.find((option) => option.deviceId === selectedDevice);

    return (
        <Box mb={4} className="header-component">
            <Typography variant="h6" mb={2}>検索条件</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6} md={3}>
                    <TextField
                        label="日付"
                        type="date"
                        fullWidth
                        value={　selectedDate.toISOString().split('T')[0]　}
                        onChange={(e) => setSelectedDate(new Date(e.target.value))}
                        InputLabelProps={{ shrink: true }}
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <Autocomplete
                        options={DeviceList.map((option) => option.deviceId)}
                        value={selectedDevice}
                        onChange={(event, newValue) => { 
                            setSelectedDevice(newValue);
                            onDeviceChange(newValue); // onDataChange を onDeviceChange に変更
                        }}
                        renderInput={(params) => <TextField {...params} label="デバイスリスト" />}
                    />
                </Grid>
                {/* デバイスリストで選択されたdeviceNameとdeviceRoomをテキスト表示 */}
                <Grid item xs={12} sm={6} md={3}>
                    <Box display="flex" alignItems="center">
                    <Typography variant="subtitle1" color="textSecondary" component="span">
                        デバイス名:&nbsp;
                    </Typography>
                    <Typography variant="subtitle1" component="span">
                        {selectedDeviceInfo?.deviceName || '未選択'}
                    </Typography>
                    </Box>
                </Grid>
                {/* 部屋名の表示 */}
                <Grid item xs={12} sm={6} md={3}>
                    <Box display="flex" alignItems="center">
                        <Typography variant="subtitle1" color="textSecondary" component="span">
                            部屋名:&nbsp;
                        </Typography>
                        <Typography variant="subtitle1" component="span">
                            {selectedDeviceInfo?.deviceRoom || '未選択'}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

HeaderSearch.propTypes = {
    // Propsの型定義をここに追加
    onDeviceChange: PropTypes.func.isRequired,
};

export default HeaderSearch;
