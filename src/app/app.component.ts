import { Component, OnInit } from '@angular/core';
import { EChartsOption } from 'echarts/types/dist/echarts';
import * as echarts from 'echarts';
//@ts-ignore
import * as wordmap from 'src/assets/wordmap.json'

//@ts-ignore
import * as brazil from 'src/assets/brazil.json'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  ROOT_PATH = 'https://echarts.apache.org/examples';
  matOption: EChartsOption = {}
  ngOnInit(): void {
    this.mapFunction();
  }
  title = 'angular-chart-geo-example';

  mapFunction() :void{
    echarts.registerMap('bra', brazil);
    this.matOption = {
      title: {
        text: 'Brasil Population Estimates (2022)',
        subtext: 'Data from www.ibge.gov.br',
        left: 'right'
      },
      tooltip: {
        trigger: 'item',
        showDelay: 0,
        transitionDuration: 0.2
      },
      visualMap: {
        left: 'right',
        min: 600000,
        max: 50000000,
        inRange: {
          color: [
            '#fee090',
            '#fdae61',
            '#f46d43',
            '#d73027',
            '#a50026'
          ]
        },
        text: ['High', 'Low'],
        calculable: true
      },
      toolbox: {
        show: true,
        //orient: 'vertical',
        left: 'left',
        top: 'top',
        feature: {
          dataView: { readOnly: false },
          restore: {},
          saveAsImage: {}
        }
      },
      series: [
        {
          name: '',
          type: 'map',
          roam: true,
          map: 'bra',
          emphasis: {
            label: {
              show: true
            }
          },
          data: [
            { name: 'Acre' , value: 830026},
            { name: 'Alagoas' , value: 3127511 },
            { name: 'Amapá' , value: 733508 },
            { name: 'Amazonas' , value: 3941175 },
            { name: 'Bahia' , value: 14136417 },
            { name: 'Ceará' , value: 8791688 },
            { name: 'Distrito Federal' , value: 2817068 },
            { name: 'Espírito Santo' , value: 3833486 },
            { name: 'Goiás' , value: 7055228  },
            { name: 'Maranhão' , value: 6775152 },
            { name: 'Mato Grosso' , value: 3658813 },
            { name: 'Mato Grosso do Sul' , value: 2756700 },
            { name: 'Minas Gerais' , value: 20538718 },
            { name: 'Pará' , value: 8116132 },
            { name: 'Paraíba' , value: 3974495 },
            { name: 'Paraná' , value: 11443208 },
            { name: 'Pernambuco' , value: 9058155 },
            { name: 'Piauí' , value: 3269200 },
            { name: 'Rio de Janeiro' , value: 16054524 },
            { name: 'Rio Grande do Norte' , value: 3302406 },
            { name: 'Rio Grande do Sul' , value: 10880506 },
            { name: 'Rondônia' , value: 1581016 },
            { name: 'Roraima' , value: 636303 },
            { name: 'Santa Catarina' , value: 7609601 },
            { name: 'São Paulo' , value: 44420459 },
            { name: 'Sergipe' , value: 2209558 },
            { name: 'Tocantins' , value: 1511459 },

          ]
        }
      ]
    };
  }
}
