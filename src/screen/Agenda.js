import {React, useState} from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import * as database from '../database/db.json'
import AulaList from '../components/aulaList'

import { agendaStyles } from './agendaStyles'
import e from '../../assets/e.png'
import arrow from '../../assets/arrow.png'
import calendar from '../../assets/calendar.png'


export default function Agenda() {

    return (

        <View style={agendaStyles.container}>
            <View style={agendaStyles.barAulas}>
                <Image source={arrow} style={agendaStyles.imageLeft} />
                <Text style={agendaStyles.textFontWhite}> AULAS </Text>
                <Image source={e} style={agendaStyles.image} />
            </View>

            <Text style={agendaStyles.barCollege}> {database._embedded.aulas[1].escola} </Text>

            <View style={agendaStyles.contents}>
                <View style={agendaStyles.barData}>
                    <Text style={agendaStyles.dataBlack}> {convertDate(database.data)} </Text>
                    <Image source={calendar} style={agendaStyles.calendarImg} />
                </View>
                <AulaList />
            </View>
            
        </View>
    );
}