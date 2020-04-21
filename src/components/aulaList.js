import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import * as database from '../database/db.json'

import aulaListStyles from '../aulaListStyles';

export default function AulaList() {

    function convertDate(data) {
        let dataSplit = data.split("T")[0];

        var year = dataSplit.substring(0, 4);
        var month = dataSplit.substring(5, 7);
        var day = dataSplit.substring(8, 10);

        var date = day + "/" + month + "/" + year;

        return date;
    }


    return (
        <FlatList
            data={aulaSelect()}
            style={aulaListStyles.aulaList}
            keyExtractor={aula => aula.id}

            renderItem={(vetorAulas) => (

                <View style={aulaListStyles.aula}>
                    <View>
                        <Text style={aulaListStyles.aulaDate}> vetorAulas.aulas[0].dataSemana </Text>
                        <FlatList
                            data={vetorAulas}
                            numColumns={5}
                            keyExtractor={aula => aula.id}
                            renderItem={
                                <View style={aulaListStyles.aulaBoxcontainer}>
                                    <Text style={aulaListStyles.aulaBox}>FIL  2M1 </Text>
                                </View>
                            }
                        />

                        <Text style={aulaListStyles.aulaDate}>_____________________________________________</Text>
                    </View>
                </View>
            )} />
    )
}
