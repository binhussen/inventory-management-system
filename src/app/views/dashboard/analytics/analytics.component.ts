import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { matxAnimations } from '../../../shared/animations/matx-animations';
import { ThemeService } from '../../../shared/services/theme.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
  animations: matxAnimations,
})
export class AnalyticsComponent implements OnInit, AfterViewInit {
  trafficVsSaleOptions: any;
  trafficVsSale: any;
  trafficData: any;
  saleData: any;

  sessionOptions: any;
  sessions: any;
  sessionsData: any;

  trafficGrowthChart: any;
  bounceRateGrowthChart: any;

  dailyTrafficChartBar: any;
  trafficSourcesChart: any;
  countryTrafficStats: any[];
  doughNutPieOptions: any;

  statCardList = [
    {
      icon: 'next_plan',
      title: 'Mission',
      amount: 'Improve socio-economic conditions of members & other people through mobilizing saving and creating access of credit & asset building using relevant technology and highly motivated staffs in consideration of social governance aspects.',
      color: 'primary',
    },
    {
      icon: 'remove_red_eye',
      title: 'Vision',
      amount: 'To be a World-Class Saving and Credit Cooperative Society in 2030',
      color: 'primary',
    },
    {
      icon: 'military_tech',
      title: 'Objective',
      amount: 'Build a saving culture and facilitate credit with a fair interest rates and improve the socio-economic conditions of members and other people by equipping them with entrepreneurship and business development skills. And ultimately contribute to the poverty reduction effort of the country by creating employment opportunities especially for women and youth.',
      color: 'primary',
    },
    {
      icon: 'store',
      title: 'Inventory Status',
      amount: '8.5% Stock Surplus',
      color: 'accent',
    }
  ];


  constructor(private themeService: ThemeService) {}

  ngAfterViewInit() {}
  ngOnInit() {
    this.themeService.onThemeChange.subscribe((activeTheme) => {
      this.initDoughNutPieOptions(activeTheme);
      this.initDailyTrafficChartBar(activeTheme);
    });
    this.initDailyTrafficChartBar(this.themeService.activatedTheme);
    this.initDoughNutPieOptions(this.themeService.activatedTheme);
  }

  initDoughNutPieOptions(theme) {
    this.doughNutPieOptions = {
      backgroundColor: 'transparent',
      color: ['#f44336', '#ff9e43', 'rgba(116, 103, 239, 1)'],
      legend: {
        show: true,
        itemGap: 20,
        icon: 'circle',
        bottom: 0,
        textStyle: {
          fontSize: 13,
          fontFamily: 'roboto',
        },
      },
      tooltip: {
        show: false,
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)',
      },
      xAxis: [
        {
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
      ],
      yAxis: [
        {
          axisLine: {
            show: false,
          },
          splitLine: {
            show: false,
          },
        },
      ],

      series: [
        {
          name: 'Traffic Rate',
          type: 'pie',
          radius: ['45%', '72.55%'],
          center: ['50%', '50%'],
          avoidLabelOverlap: false,
          hoverOffset: 5,
          stillShowZeroSum: false,

          label: {
            normal: {
              show: false,
              position: 'center',
              textStyle: {
                fontSize: '13',
                fontWeight: 'normal',
              },
              formatter: '{a}',
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '15',
                fontWeight: 'normal',
                color: 'rgba(116, 103, 239, 1)',
              },
              formatter: '{b} \n{c} ({d}%)',
            },
          },
          labelLine: {
            normal: {
              show: false,
            },
          },
          data: [
            {
              value: 65,
              name: 'Google',
            },
            {
              value: 20,
              name: 'Facebook',
            },
            { value: 15, name: 'Others' },
          ],

          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)',
            },
          },
        },
      ],
    };
  }

  initDailyTrafficChartBar(theme) {
    this.dailyTrafficChartBar = {
      grid: {
        top: 16,
        left: 36,
        right: 16,
        bottom: 32,
      },
      legend: {},
      tooltip: {
        show: true,
        trigger: 'axis',

        axisPointer: {
          type: 'cross',
          lineStyle: {
            opacity: 0,
          },
        },
        crossStyle: {
          color: '#000',
        },
      },
      series: [
        {
          data: [34, 45, 31, 45, 31, 43, 26, 43, 31, 45, 33, 40],
          type: 'line',
          areaStyle: {},
          smooth: true,
          lineStyle: {
            width: 2,
            color: '#fff',
          },
        },
      ],
      xAxis: {
        show: true,
        type: 'category',
        showGrid: false,
        boundaryGap: false,
        data: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        axisLabel: {
          color: '#ccc',
          margin: 20,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        min: 10,
        max: 60,
        axisLabel: {
          color: '#ccc',
          margin: 20,
          fontSize: 13,
          fontFamily: 'roboto',
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255, 255, 255, .1)',
          },
        },

        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      color: [
        {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(255,255,255,0.3)', // color at 0% position
            },
            {
              offset: 1,
              color: 'rgba(255,255,255,0)', // color at 100% position
            },
          ],
          global: false, // false by default
        },
      ],
    };
  }

  getProductStatus(value) {
    if (value) {
      if (value < 20) {
        return {
          color: 'accent',
          status: `${value} available`,
        };
      } else
        return {
          color: 'primary',
          status: `in stock`,
        };
    } else
      return {
        color: 'warn',
        status: `out of stcok`,
      };
  }
}
