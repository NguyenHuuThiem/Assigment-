import { Image, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { icon } from '../conten';
export default function Details(props) {
    const route = useRoute();
    const navigation = props.navigation;

    const { item, data, setData } = route.params;
    const onDelete = (idItem) => {
        const newList = data.filter((item) => item.id !== idItem);
        setData(newList);

    }
    
    return (
        <View style={{}}>
            <View style={{
                flexDirection: "row",  height: 85,
            }}>
                <Image
                    style={{
                        height: 60, width: 60, borderRadius: 30, alignSelf: 'center',
                        marginLeft: 120
                    }}

                    source={{ uri: item.Image }} />
                <View style={{}}>


                    <Text style={{
                        marginTop: 10, fontSize: 18, fontWeight: "bold", marginLeft: 10, marginTop: 29,
                        color: "black"
                    }}>{item.name}</Text>
                    
                </View>
            </View>
            <View style={{ paddingHorizontal: 100 }}>
                <View style={{ flexDirection: "row", marginVertical: 10, marginTop: 18 }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("Edit", { item, setData, data })

                        }}
                        style={{
                            width: "70%",
                            backgroundColor: "gray",
                            alignItems: "center",
                            borderRadius: 10,
                            marginRight: 10,
                            justifyContent: "center",
                            flexDirection: "row",
                        }}>
                        <Image style={{
                            width: 15, height: 15, tintColor: "white",
                            marginRight: 10
                        }} source={icon.edit} />
                        <Text style={{ paddingVertical: 6, color: "white" }}>Chỉnh sửa cửa hàng</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            onDelete(item.id);
                            navigation.navigate("QuanLy");

                        }}
                        style={{
                            flex: 1,
                            backgroundColor: "red",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: 10,
                        }}>
                        <Image style={{ width: 15, height: 15, tintColor: "white" }} source={icon.delete} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )

}