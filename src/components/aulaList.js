import React from 'react';
import { View, Text, FlatList } from 'react-native';

import * as database from '../database/db.json'
import * as dbVagos from '../database/dbVagos.json'

import { aulaListStyles } from './aulaListStyles';

export default function AulaList() {

    function diaSemana(data) {

        var year = data.substring(6, 10);
        var month = data.substring(3, 5);
        var day = data.substring(0, 2);
        var dateString = month + "/" + day + "/" + year;

        var date = new Date(year, month - 1, day)

        switch (date.getDay()) {
            case 1:
                return "Domingo"
                break;
            case 2:
                return "Segunda-feira"
                break;
            case 3:
                return "Terça-feira"
                break;
            case 4:
                return "Quarta-feira"
                break;
            case 5:
                return "Quinta-feira"
                break;
            case 6:
                return "Sexta-feira"
                break;
            case 7:
                return "Sábado"
                break;

            default:
                return
                break;
        }

    }

    function aulaSelect() {
        var aulas = database._embedded.aulas;

        var vetor = [], vetorVetores = [];
        vetor.push(aulas[0]);

        for (let i = 1; i <= aulas.length; i++) {

            if ((vetor.length < 5 || i < aulas.length)
                && aulas[i].dataSemana === aulas[i - 1].dataSemana
                && aulas[i].turno === aulas[i - 1].turno) {
                vetor.push(aulas[i]);
            }

            else {
                vetorVetores.push(vetor);
                vetor = [];
                vetor.push(aulas[i]);
            }
        }

        vetorVetores.forEach(vetor => {
            if(vetor.length < 5){
                while(vetor.length < 5){
                    vetor.push(dbVagos);
                }
            }
        });
        return vetorVetores;
    }

    return (

        <FlatList
            data={aulaSelect()}
            style={aulaListStyles.aulaList}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={<Text>Is empty</Text>}
            renderItem={(vetorAulas) => (

                <View style={aulaListStyles.aula}>
                    <View>
                        <Text style={aulaListStyles.aulaDate}> 
                            {diaSemana(vetorAulas.item[0].dataSemana)} > {vetorAulas.item[0].dataSemana} >
                            {vetorAulas.item[0].turno == "M" ? " Manhã" : " Tarde"}
                        </Text>
                        
                        <FlatList
                            data={vetorAulas.item}
                            numColumns={5}
                            keyExtractor={(item, index) => String(index)}
                            renderItem={aula => (
                                <View style={aulaListStyles.aulaBoxcontainer}>
                                    <Text style={aula.item._embedded.disciplina.sigla == dbVagos._embedded.disciplina.sigla 
                                        ? aulaListStyles.aulaBoxVago : aulaListStyles.aulaBox }>
                                        {aula.item._embedded.disciplina.sigla}{aula.item.horario}{aula.item.turno}
                                    </Text>
                                </View>
                            )
                        }
                        />
                        <Text style={aulaListStyles.aulaDate}>_____________________________________________</Text>

                    </View>
                </View>
            )} />
    )
}