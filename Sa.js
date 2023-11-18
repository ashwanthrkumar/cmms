import React, { useState } from 'react';
import { View, Text, DatePickerAndroid, Button } from 'react-native';
const Sa = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const showDatePicker = async () => {
        try {
            const { action, year, month, day } = await DatePickerAndroid.open({
                date: new Date(),
                mode: 'calendar',
            });
            if (action !== DatePickerAndroid.dismissedAction) {
                const formattedDate = `${day}-${month + 1}-${year}`;
                setSelectedDate(formattedDate);
            }
        } catch (error) {
            console.warn('Error occurred while opening date picker:', error);
        }
    };

    return (
        <View>
            <Button title="Select Date" onPress={showDatePicker} />
            {selectedDate && <Text>Selected Date: {selectedDate}</Text>}
        </View>
    );
};

export default Sa;
