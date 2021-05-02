import React, { useState } from 'react';
import {View, Text, TextInput, Dimensions, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import styles from './styles';
import countryList from 'country-list';
import { ScrollView } from 'react-native';
import Button from '../../components/Button';

const countries = countryList.getData();

const AddressScreen = () => {

    const [country, setCountry] = useState(countries[0].code);
    const [fullName, setFullName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [apartment, setApartment] = useState('');
    const [state, setState] = useState('');
    const [zipcode, setZipcode] = useState('');
    const windowWidth = Dimensions.get('window').width;
    const [addressError, setAddressError] = useState('No address entered');

    const onCheckout = () => {
        
    }

    return (
     <View style={styles.root}>
        <View style={styles.row}>
            <Picker
                selectedValue={country}
                onValueChange={setCountry}
            >
                {countries.map(country => (
                    <Picker.Item
                    value={country.code}
                    label={country.name}
                 />
                ))}
            </Picker>
        </View>

        <View style={styles.row}>
            <Text style={styles.label}>Full Name( First and Last name)</Text>
            <TextInput
                 style={styles.input}
                 placeholder="Full Name"
                 value={fullName}
                 onChangeText={setFullName}
                 
            />
        </View>

        <View style={styles.row}>
            <Text style={styles.label}>Phone Number</Text>
            <TextInput
                 style={styles.input}
                 placeholder="Phone Number"
                 value={phoneNumber}
                 onChangeText={setPhoneNumber}
                 keyboardType={'phone-pad'}
                 
            />
        </View>

        <View style={styles.row}>
            <Text style={styles.label}>Address</Text>
            <TextInput
                 style={styles.input}
                 placeholder="Address"
                 value={address}
                 onChangeText={(text) => { 
                     setAddress(text)
                     setAddressError('')
                    }}
                 
            />
            <TextInput
                 style={styles.inputApt}
                 placeholder="Apartment, Suite , Unit , Building"
                 value={apartment}
                 onChangeText={setApartment}
                 
            />
            {!!addressError && <Text style={{color:'red'}}>{addressError}</Text>}
        </View>

        <View style={[styles.row, {marginTop:8}]}>
            <Text style={styles.label}>City</Text>
            <TextInput
                 style={styles.input}
                 placeholder="City"
                 value={city}
                 onChangeText={setCity}
                 keyboardType={'phone-pad'}
                 
            />
        </View>
        <View style={styles.pairForm}>
            <View style={{width:windowWidth/2}}>
                <Text style={styles.label}>State</Text>
        <Picker
                selectedValue={state}
                onValueChange={setState}
                style={{
                    height:100,
                    marginLeft:-10,
                    marginTop:-80
                }}
            >
                <Picker.Item
                    value={'California'}
                    label={'California'}
                 />
                 <Picker.Item
                    value={'Alaska'}
                    label={'Alaska'}
                 />
                 <Picker.Item
                    value={'Florida'}
                    label={'Florida'}
                 />
                 <Picker.Item
                    value={'Texas'}
                    label={'Texas'}
                 />
            </Picker>
            </View>
            <View style={{width:windowWidth/2.37, marginLeft:10}}>
                <Text style={styles.label}>Zip Code</Text>
                <TextInput
                 style={styles.inputPairForm}
                 placeholder="Zip Code"
                 value={zipcode}
                 onChangeText={setZipcode}
                 
                />
            </View>
        </View>
        <View style={{height:55, width:'100%'}}></View>
        <Button text='Checkout' onPress={onCheckout} />


        

        
     </View>
    )
}

export default AddressScreen;