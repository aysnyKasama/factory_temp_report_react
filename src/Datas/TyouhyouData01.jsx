// サンプルデータの定義
const TyouhyouData = [
    {
        no: 1,
        date: '2024-11-10',
        time: '11:11',
        temperature: '10℃',
        humidity: '30%',
    },
    {
        no: 2,
        date: '2024-11-11',
        time: '12:12',
        temperature: '20℃',
        humidity: '40%',
    },
    {
        no: 3,
        date: '2024-11-12',
        time: '13:13',
        temperature: '30℃',
        humidity: '50%',
    },
    {
        no: 4,
        date: '2024-11-13',
        time: '14:14',
        temperature: '40℃',
        humidity: '60%',
    },
    {
        no: 5,
        date: '2024-11-14',
        time: '15:15',
        temperature: '50℃',
        humidity: '70%',
    },
    {
        no: 6,
        date: '2024-11-15',
        time: '16:16',
        temperature: '60℃',
        humidity: '80%',
    },
    {
        no: 7,
        date: '2024-11-16',
        time: '17:17',
        temperature: '70℃',
        humidity: '90%',
    },
    {
        no: 8,
        date: '2024-11-17',
        time: '18:18',
        temperature: '80℃',
        humidity: '100%',
    },
    {
        no: 9,
        date: '2024-11-18',
        time: '19:19',
        temperature: '90℃',
        humidity: '110%',
    },
    {
        no: 10,
        date: '2024-11-19',
        time: '20:20',
        temperature: '100℃',
        humidity: '120%',
    },
    {
        no: 11,
        date: '2024-11-20',
        time: '21:21',
        temperature: '110℃',
        humidity: '130%',
    },
    {
        no: 12,
        date: '2024-11-21',
        time: '22:22',
        temperature: '120℃',
        humidity: '140%',
    },
    {
        no: 13,
        date: '2024-11-22',
        time: '23:23',
        temperature: '130℃',
        humidity: '150%',
    },
    {
        no: 14,
        date: '2024-11-23',
        time: '24:24',
        temperature: '140℃',
        humidity: '160%',
    },
    {
        no: 15,
        date: '2024-11-24',
        time: '25:25',
        temperature: '150℃',
        humidity: '170%',
    },
    {
        no: 16,
        date: '2024-11-25',
        time: '26:26',
        temperature: '160℃',
        humidity: '180%',
    },
    {
        no: 17,
        date: '2024-11-26',
        time: '27:27',
        temperature: '170℃',
        humidity: '190%',
    },
    {
        no: 18,
        date: '2024-11-27',
        time: '28:28',
        temperature: '180℃',
        humidity: '200%',
    },
    {
        no: 19,
        date: '2024-11-28',
        time: '29:29',
        temperature: '190℃',
        humidity: '210%',
    },
    {
        no: 20,
        date: '2024-11-29',
        time: '30:30',
        temperature: '200℃',
        humidity: '220%',
    },
    {
        no: 21,
        date: '2024-11-30',
        time: '31:31',
        temperature: '210℃',
        humidity: '230%',
    },
    {
        no: 22,
        date: '2024-12-1',
        time: '32:32',
        temperature: '220℃',
        humidity: '240%',
    },
    {
        no: 23,
        date: '2024-12-2',
        time: '33:33',
        temperature: '230℃',
        humidity: '250%',
    },
    {
        no: 24,
        date: '2024-12-3',
        time: '34:34',
        temperature: '240℃',
        humidity: '260%',
    },
    {
        no: 25,
        date: '2024-12-4',
        time: '35:35',
        temperature: '250℃',
        humidity: '270%',
    },
    {
        no: 26,
        date: '2024-12-5',
        time: '36:36',
        temperature: '260℃',
        humidity: '280%',
    },
    {
        no: 27,
        date: '2024-12-6',
        time: '37:37',
        temperature: '270℃',
        humidity: '290%',
    },
    {
        no: 28,
        date: '2024-12-7',
        time: '38:38',
        temperature: '280℃',
        humidity: '300%',
    },
    {
        no: 29,
        date: '2024-12-8',
        time: '39:39',
        temperature: '290℃',
        humidity: '310%',
    },
    {
        no: 30,
        date: '2024-12-9',
        time: '40:40',
        temperature: '300℃',
        humidity: '320%',
    },
    {
        no: 31,
        date: '2024-12-10',
        time: '41:41',
        temperature: '310℃',
        humidity: '330%',
    },
    {
        no: 32,
        date: '2024-12-11',
        time: '42:42',
        temperature: '320℃',
        humidity: '340%',
    },
    {
        no: 33,
        date: '2024-12-12',
        time: '43:43',
        temperature: '330℃',
        humidity: '350%',
    },
    {
        no: 34,
        date: '2024-12-13',
        time: '44:44',
        temperature: '340℃',
        humidity: '360%',
    },
    {
        no: 35,
        date: '2024-12-14',
        time: '45:45',
        temperature: '350℃',
        humidity: '370%',
    },
    {
        no: 36,
        date: '2024-12-15',
        time: '46:46',
        temperature: '360℃',
        humidity: '380%',
    },
    {
        no: 37,
        date: '2024-12-16',
        time: '47:47',
        temperature: '370℃',
        humidity: '390%',
    },
    {
        no: 38,
        date: '2024-12-17',
        time: '48:48',
        temperature: '380℃',
        humidity: '400%',
    },
    {
        no: 39,
        date: '2024-12-18',
        time: '49:49',
        temperature: '390℃',
        humidity: '410%',
    },
    {
        no: 40,
        date: '2024-12-19',
        time: '50:50',
        temperature: '400℃',
        humidity: '420%',
    },
    {
        no: 41,
        date: '2024-12-20',
        time: '51:51',
        temperature: '410℃',
        humidity: '430%',
    },
    {
        no: 42,
        date: '2024-12-21',
        time: '52:52',
        temperature: '420℃',
        humidity: '440%',
    },
    {
        no: 43,
        date: '2024-12-22',
        time: '53:53',
        temperature: '430℃',
        humidity: '450%',
    },
    {
        no: 44,
        date: '2024-12-23',
        time: '54:54',
        temperature: '440℃',
        humidity: '460%',
    },
    {
        no: 45,
        date: '2024-12-24',
        time: '55:55',
        temperature: '450℃',
        humidity: '470%',
    },
    {
        no: 46,
        date: '2024-12-25',
        time: '56:56',
        temperature: '460℃',
        humidity: '480%',
    },
    {
        no: 47,
        date: '2024-12-26',
        time: '57:57',
        temperature: '470℃',
        humidity: '490%',
    },
    {
        no: 48,
        date: '2024-12-27',
        time: '58:58',
        temperature: '480℃',
        humidity: '500%',
    },
    {
        no: 49,
        date: '2024-12-28',
        time: '59:59',
        temperature: '490℃',
        humidity: '510%',
    },
    {
        no: 50,
        date: '2024-12-29',
        time: '60:60',
        temperature: '500℃',
        humidity: '520%',
    },
    {
        no: 51,
        date: '2024-12-30',
        time: '61:61',
        temperature: '510℃',
        humidity: '530%',
    },
    {
        no: 52,
        date: '2024-12-31',
        time: '62:62',
        temperature: '520℃',
        humidity: '540%',
    },
    {
        no: 53,
        date: '2025-1-1',
        time: '63:63',
        temperature: '530℃',
        humidity: '550%',
    },
    {
        no: 54,
        date: '2025-1-2',
        time: '64:64',
        temperature: '540℃',
        humidity: '560%',
    },
    {
        no: 55,
        date: '2025-1-3',
        time: '65:65',
        temperature: '550℃',
        humidity: '570%',
    },
    {
        no: 56,
        date: '2025-1-4',
        time: '66:66',
        temperature: '560℃',
        humidity: '580%',
    },
    {
        no: 57,
        date: '2025-1-5',
        time: '67:67',
        temperature: '570℃',
        humidity: '590%',
    },
    {
        no: 58,
        date: '2025-1-6',
        time: '68:68',
        temperature: '580℃',
        humidity: '600%',
    },
    {
        no: 59,
        date: '2025-1-7',
        time: '69:69',
        temperature: '590℃',
        humidity: '610%',
    },
    {
        no: 60,
        date: '2025-1-8',
        time: '70:70',
        temperature: '600℃',
        humidity: '620%',
    },
    {
        no: 61,
        date: '2025-1-9',
        time: '71:71',
        temperature: '610℃',
        humidity: '630%',
    },
    {
        no: 62,
        date: '2025-1-10',
        time: '72:72',
        temperature: '620℃',
        humidity: '640%',
    },
    {
        no: 63,
        date: '2025-1-11',
        time: '73:73',
        temperature: '630℃',
        humidity: '650%',
    },
    {
        no: 64,
        date: '2025-1-12',
        time: '74:74',
        temperature: '640℃',
        humidity: '660%',
    },
    {
        no: 65,
        date: '2025-1-13',
        time: '75:75',
        temperature: '650℃',
        humidity: '670%',
    },
    {
        no: 66,
        date: '2025-1-14',
        time: '76:76',
        temperature: '660℃',
        humidity: '680%',
    },
    {
        no: 67,
        date: '2025-1-15',
        time: '77:77',
        temperature: '670℃',
        humidity: '690%',
    },
    {
        no: 68,
        date: '2025-1-16',
        time: '78:78',
        temperature: '680℃',
        humidity: '700%',
    },
    {
        no: 69,
        date: '2025-1-17',
        time: '79:79',
        temperature: '690℃',
        humidity: '710%',
    },
    {
        no: 70,
        date: '2025-1-18',
        time: '80:80',
        temperature: '700℃',
        humidity: '720%',
    },
    {
        no: 71,
        date: '2025-1-19',
        time: '81:81',
        temperature: '710℃',
        humidity: '730%',
    },
    {
        no: 72,
        date: '2025-1-20',
        time: '82:82',
        temperature: '720℃',
        humidity: '740%',
    },
    {
        no: 73,
        date: '2025-1-21',
        time: '83:83',
        temperature: '730℃',
        humidity: '750%',
    },
    {
        no: 74,
        date: '2025-1-22',
        time: '84:84',
        temperature: '740℃',
        humidity: '760%',
    },
    {
        no: 75,
        date: '2025-1-23',
        time: '85:85',
        temperature: '750℃',
        humidity: '770%',
    },
    {
        no: 76,
        date: '2025-1-24',
        time: '86:86',
        temperature: '760℃',
        humidity: '780%',
    },
    {
        no: 77,
        date: '2025-1-25',
        time: '87:87',
        temperature: '770℃',
        humidity: '790%',
    },
    {
        no: 78,
        date: '2025-1-26',
        time: '88:88',
        temperature: '780℃',
        humidity: '800%',
    },
    {
        no: 79,
        date: '2025-1-27',
        time: '89:89',
        temperature: '790℃',
        humidity: '810%',
    },
    {
        no: 80,
        date: '2025-1-28',
        time: '90:90',
        temperature: '800℃',
        humidity: '820%',
    }
];

// サンプルデータをエクスポート
export default TyouhyouData;
