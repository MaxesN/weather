export class Delay {
    private timeout: ReturnType<typeof setTimeout> | null = null
    private delay = 0

    constructor(delay: number) {
        this.delay = delay
    }

    public start(callback: () => void | Promise<void>) {
        if (this.timeout) {
            clearTimeout(this.timeout);
        }

        this.timeout = setTimeout(() => {
            callback();
        }, this.delay);
    }
}

export const daily = {
    "coord": {
        "lon": 24.0316,
        "lat": 49.842
    },
    "weather": [
        {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
        }
    ],
    "base": "stations",
    "main": {
        "temp": 275.04,
        "feels_like": 271.26,
        "temp_min": 275.04,
        "temp_max": 275.04,
        "pressure": 1029,
        "humidity": 53,
        "sea_level": 1029,
        "grnd_level": 991
    },
    "visibility": 10000,
    "wind": {
        "speed": 3.89,
        "deg": 281,
        "gust": 5.77
    },
    "clouds": {
        "all": 100
    },
    "dt": 1731492559,
    "sys": {
        "country": "UA",
        "sunrise": 1731476001,
        "sunset": 1731508993
    },
    "timezone": 7200,
    "id": 702550,
    "name": "Lviv",
    "cod": 200
}


export const weatherData = {
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1731488400,
            "main": {
                "temp": 274.34,
                "feels_like": 270.61,
                "temp_min": 274.34,
                "temp_max": 274.34,
                "pressure": 1029,
                "sea_level": 1029,
                "grnd_level": 991,
                "humidity": 58,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 3.6,
                "deg": 282,
                "gust": 5.43
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-11-13 09:00:00"
        },
        {
            "dt": 1731499200,
            "main": {
                "temp": 274.78,
                "feels_like": 270.72,
                "temp_min": 274.78,
                "temp_max": 275.66,
                "pressure": 1029,
                "sea_level": 1029,
                "grnd_level": 990,
                "humidity": 55,
                "temp_kf": -0.88
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 99
            },
            "wind": {
                "speed": 4.23,
                "deg": 280,
                "gust": 5.88
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-11-13 12:00:00"
        },
        {
            "dt": 1731510000,
            "main": {
                "temp": 273.63,
                "feels_like": 270.85,
                "temp_min": 273.27,
                "temp_max": 273.63,
                "pressure": 1028,
                "sea_level": 1028,
                "grnd_level": 990,
                "humidity": 60,
                "temp_kf": 0.36
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.35,
                "deg": 303,
                "gust": 2.37
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-13 15:00:00"
        },
        {
            "dt": 1731520800,
            "main": {
                "temp": 271.5,
                "feels_like": 269.17,
                "temp_min": 271.5,
                "temp_max": 271.5,
                "pressure": 1028,
                "sea_level": 1028,
                "grnd_level": 990,
                "humidity": 62,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 59
            },
            "wind": {
                "speed": 1.72,
                "deg": 280,
                "gust": 1.66
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-13 18:00:00"
        },
        {
            "dt": 1731531600,
            "main": {
                "temp": 270.45,
                "feels_like": 266.76,
                "temp_min": 270.45,
                "temp_max": 270.45,
                "pressure": 1028,
                "sea_level": 1028,
                "grnd_level": 990,
                "humidity": 72,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 12
            },
            "wind": {
                "speed": 2.65,
                "deg": 261,
                "gust": 3.14
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-13 21:00:00"
        },
        {
            "dt": 1731542400,
            "main": {
                "temp": 270.37,
                "feels_like": 266.51,
                "temp_min": 270.37,
                "temp_max": 270.37,
                "pressure": 1027,
                "sea_level": 1027,
                "grnd_level": 989,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 41
            },
            "wind": {
                "speed": 2.8,
                "deg": 264,
                "gust": 7.08
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-14 00:00:00"
        },
        {
            "dt": 1731553200,
            "main": {
                "temp": 269.6,
                "feels_like": 265.32,
                "temp_min": 269.6,
                "temp_max": 269.6,
                "pressure": 1026,
                "sea_level": 1026,
                "grnd_level": 988,
                "humidity": 93,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 62
            },
            "wind": {
                "speed": 3.07,
                "deg": 267,
                "gust": 7.86
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-14 03:00:00"
        },
        {
            "dt": 1731564000,
            "main": {
                "temp": 269.11,
                "feels_like": 264.51,
                "temp_min": 269.11,
                "temp_max": 269.11,
                "pressure": 1026,
                "sea_level": 1026,
                "grnd_level": 988,
                "humidity": 94,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 40
            },
            "wind": {
                "speed": 3.29,
                "deg": 264,
                "gust": 8.53
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-11-14 06:00:00"
        },
        {
            "dt": 1731574800,
            "main": {
                "temp": 273.67,
                "feels_like": 268.91,
                "temp_min": 273.67,
                "temp_max": 273.67,
                "pressure": 1025,
                "sea_level": 1025,
                "grnd_level": 988,
                "humidity": 63,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 11
            },
            "wind": {
                "speed": 4.96,
                "deg": 276,
                "gust": 7.08
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-11-14 09:00:00"
        },
        {
            "dt": 1731585600,
            "main": {
                "temp": 275.24,
                "feels_like": 270.6,
                "temp_min": 275.24,
                "temp_max": 275.24,
                "pressure": 1023,
                "sea_level": 1023,
                "grnd_level": 986,
                "humidity": 69,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 24
            },
            "wind": {
                "speed": 5.49,
                "deg": 282,
                "gust": 6.88
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-11-14 12:00:00"
        },
        {
            "dt": 1731596400,
            "main": {
                "temp": 272.71,
                "feels_like": 269.45,
                "temp_min": 272.71,
                "temp_max": 272.71,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 985,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 2.65,
                "deg": 256,
                "gust": 2.95
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-14 15:00:00"
        },
        {
            "dt": 1731607200,
            "main": {
                "temp": 272.93,
                "feels_like": 269.08,
                "temp_min": 272.93,
                "temp_max": 272.93,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 983,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 98
            },
            "wind": {
                "speed": 3.36,
                "deg": 240,
                "gust": 7.99
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-14 18:00:00"
        },
        {
            "dt": 1731618000,
            "main": {
                "temp": 273.08,
                "feels_like": 268.58,
                "temp_min": 273.08,
                "temp_max": 273.08,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 983,
                "humidity": 78,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 82
            },
            "wind": {
                "speed": 4.3,
                "deg": 245,
                "gust": 12.37
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-14 21:00:00"
        },
        {
            "dt": 1731628800,
            "main": {
                "temp": 274.14,
                "feels_like": 268.62,
                "temp_min": 274.14,
                "temp_max": 274.14,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 981,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 91
            },
            "wind": {
                "speed": 6.74,
                "deg": 262,
                "gust": 14.8
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-15 00:00:00"
        },
        {
            "dt": 1731639600,
            "main": {
                "temp": 274.14,
                "feels_like": 268.69,
                "temp_min": 274.14,
                "temp_max": 274.14,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 981,
                "humidity": 96,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13n"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 6.58,
                "deg": 261,
                "gust": 13.88
            },
            "visibility": 757,
            "pop": 1,
            "snow": {
                "3h": 0.4
            },
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-15 03:00:00"
        },
        {
            "dt": 1731650400,
            "main": {
                "temp": 274.76,
                "feels_like": 269.99,
                "temp_min": 274.76,
                "temp_max": 274.76,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 982,
                "humidity": 97,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 600,
                    "main": "Snow",
                    "description": "light snow",
                    "icon": "13d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 5.49,
                "deg": 271,
                "gust": 11.47
            },
            "visibility": 1141,
            "pop": 0.92,
            "snow": {
                "3h": 0.38
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-11-15 06:00:00"
        },
        {
            "dt": 1731661200,
            "main": {
                "temp": 277.04,
                "feels_like": 274.01,
                "temp_min": 277.04,
                "temp_max": 277.04,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 983,
                "humidity": 79,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 500,
                    "main": "Rain",
                    "description": "light rain",
                    "icon": "10d"
                }
            ],
            "clouds": {
                "all": 100
            },
            "wind": {
                "speed": 3.43,
                "deg": 318,
                "gust": 7.04
            },
            "visibility": 10000,
            "pop": 0.3,
            "rain": {
                "3h": 0.34
            },
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-11-15 09:00:00"
        },
        {
            "dt": 1731672000,
            "main": {
                "temp": 278.63,
                "feels_like": 275.01,
                "temp_min": 278.63,
                "temp_max": 278.63,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 984,
                "humidity": 58,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 92
            },
            "wind": {
                "speed": 5.17,
                "deg": 314,
                "gust": 7.37
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-11-15 12:00:00"
        },
        {
            "dt": 1731682800,
            "main": {
                "temp": 275.06,
                "feels_like": 272,
                "temp_min": 275.06,
                "temp_max": 275.06,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 985,
                "humidity": 75,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 62
            },
            "wind": {
                "speed": 2.93,
                "deg": 298,
                "gust": 3.45
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-15 15:00:00"
        },
        {
            "dt": 1731693600,
            "main": {
                "temp": 274.14,
                "feels_like": 271.49,
                "temp_min": 274.14,
                "temp_max": 274.14,
                "pressure": 1024,
                "sea_level": 1024,
                "grnd_level": 986,
                "humidity": 80,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 38
            },
            "wind": {
                "speed": 2.32,
                "deg": 278,
                "gust": 2.21
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-15 18:00:00"
        },
        {
            "dt": 1731704400,
            "main": {
                "temp": 273.51,
                "feels_like": 270.13,
                "temp_min": 273.51,
                "temp_max": 273.51,
                "pressure": 1024,
                "sea_level": 1024,
                "grnd_level": 987,
                "humidity": 88,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 14
            },
            "wind": {
                "speed": 2.95,
                "deg": 249,
                "gust": 3.38
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-15 21:00:00"
        },
        {
            "dt": 1731715200,
            "main": {
                "temp": 273.25,
                "feels_like": 269.63,
                "temp_min": 273.25,
                "temp_max": 273.25,
                "pressure": 1024,
                "sea_level": 1024,
                "grnd_level": 986,
                "humidity": 90,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 15
            },
            "wind": {
                "speed": 3.16,
                "deg": 252,
                "gust": 5.46
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-16 00:00:00"
        },
        {
            "dt": 1731726000,
            "main": {
                "temp": 273.06,
                "feels_like": 269.28,
                "temp_min": 273.06,
                "temp_max": 273.06,
                "pressure": 1024,
                "sea_level": 1024,
                "grnd_level": 986,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02n"
                }
            ],
            "clouds": {
                "all": 14
            },
            "wind": {
                "speed": 3.31,
                "deg": 252,
                "gust": 7.5
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-16 03:00:00"
        },
        {
            "dt": 1731736800,
            "main": {
                "temp": 273.16,
                "feels_like": 269.4,
                "temp_min": 273.16,
                "temp_max": 273.16,
                "pressure": 1024,
                "sea_level": 1024,
                "grnd_level": 986,
                "humidity": 92,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 14
            },
            "wind": {
                "speed": 3.31,
                "deg": 236,
                "gust": 5.77
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-11-16 06:00:00"
        },
        {
            "dt": 1731747600,
            "main": {
                "temp": 278.38,
                "feels_like": 275.14,
                "temp_min": 278.38,
                "temp_max": 278.38,
                "pressure": 1022,
                "sea_level": 1022,
                "grnd_level": 986,
                "humidity": 66,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 11
            },
            "wind": {
                "speed": 4.27,
                "deg": 243,
                "gust": 7.44
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-11-16 09:00:00"
        },
        {
            "dt": 1731758400,
            "main": {
                "temp": 280.78,
                "feels_like": 278.1,
                "temp_min": 280.78,
                "temp_max": 280.78,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 984,
                "humidity": 56,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 6
            },
            "wind": {
                "speed": 4.29,
                "deg": 253,
                "gust": 7.07
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-11-16 12:00:00"
        },
        {
            "dt": 1731769200,
            "main": {
                "temp": 277.31,
                "feels_like": 274.76,
                "temp_min": 277.31,
                "temp_max": 277.31,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 984,
                "humidity": 74,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 2.86,
                "deg": 251,
                "gust": 3.32
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-16 15:00:00"
        },
        {
            "dt": 1731780000,
            "main": {
                "temp": 275.67,
                "feels_like": 272.41,
                "temp_min": 275.67,
                "temp_max": 275.67,
                "pressure": 1021,
                "sea_level": 1021,
                "grnd_level": 984,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.34,
                "deg": 242,
                "gust": 6.26
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-16 18:00:00"
        },
        {
            "dt": 1731790800,
            "main": {
                "temp": 274.62,
                "feels_like": 271.33,
                "temp_min": 274.62,
                "temp_max": 274.62,
                "pressure": 1020,
                "sea_level": 1020,
                "grnd_level": 983,
                "humidity": 83,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 1
            },
            "wind": {
                "speed": 3.1,
                "deg": 220,
                "gust": 4.87
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-16 21:00:00"
        },
        {
            "dt": 1731801600,
            "main": {
                "temp": 273.86,
                "feels_like": 270.58,
                "temp_min": 273.86,
                "temp_max": 273.86,
                "pressure": 1019,
                "sea_level": 1019,
                "grnd_level": 982,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 4
            },
            "wind": {
                "speed": 2.91,
                "deg": 214,
                "gust": 4.27
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-17 00:00:00"
        },
        {
            "dt": 1731812400,
            "main": {
                "temp": 273.48,
                "feels_like": 270.41,
                "temp_min": 273.48,
                "temp_max": 273.48,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 981,
                "humidity": 81,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 26
            },
            "wind": {
                "speed": 2.61,
                "deg": 206,
                "gust": 3.2
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-17 03:00:00"
        },
        {
            "dt": 1731823200,
            "main": {
                "temp": 273.17,
                "feels_like": 270.03,
                "temp_min": 273.17,
                "temp_max": 273.17,
                "pressure": 1017,
                "sea_level": 1017,
                "grnd_level": 980,
                "humidity": 82,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03d"
                }
            ],
            "clouds": {
                "all": 26
            },
            "wind": {
                "speed": 2.62,
                "deg": 192,
                "gust": 2.95
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-11-17 06:00:00"
        },
        {
            "dt": 1731834000,
            "main": {
                "temp": 278.58,
                "feels_like": 275.9,
                "temp_min": 278.58,
                "temp_max": 278.58,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 979,
                "humidity": 59,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 6
            },
            "wind": {
                "speed": 3.4,
                "deg": 198,
                "gust": 5.01
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-11-17 09:00:00"
        },
        {
            "dt": 1731844800,
            "main": {
                "temp": 281.29,
                "feels_like": 279.19,
                "temp_min": 281.29,
                "temp_max": 281.29,
                "pressure": 1013,
                "sea_level": 1013,
                "grnd_level": 977,
                "humidity": 51,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "clouds": {
                "all": 16
            },
            "wind": {
                "speed": 3.4,
                "deg": 217,
                "gust": 5.66
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-11-17 12:00:00"
        },
        {
            "dt": 1731855600,
            "main": {
                "temp": 277.9,
                "feels_like": 275.45,
                "temp_min": 277.9,
                "temp_max": 277.9,
                "pressure": 1012,
                "sea_level": 1012,
                "grnd_level": 976,
                "humidity": 65,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 56
            },
            "wind": {
                "speed": 2.87,
                "deg": 190,
                "gust": 3.05
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-17 15:00:00"
        },
        {
            "dt": 1731866400,
            "main": {
                "temp": 276.16,
                "feels_like": 272.91,
                "temp_min": 276.16,
                "temp_max": 276.16,
                "pressure": 1011,
                "sea_level": 1011,
                "grnd_level": 975,
                "humidity": 74,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 802,
                    "main": "Clouds",
                    "description": "scattered clouds",
                    "icon": "03n"
                }
            ],
            "clouds": {
                "all": 39
            },
            "wind": {
                "speed": 3.47,
                "deg": 187,
                "gust": 6.44
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-17 18:00:00"
        },
        {
            "dt": 1731877200,
            "main": {
                "temp": 275.61,
                "feels_like": 272.25,
                "temp_min": 275.61,
                "temp_max": 275.61,
                "pressure": 1010,
                "sea_level": 1010,
                "grnd_level": 974,
                "humidity": 71,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 56
            },
            "wind": {
                "speed": 3.47,
                "deg": 202,
                "gust": 7
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-17 21:00:00"
        },
        {
            "dt": 1731888000,
            "main": {
                "temp": 275.41,
                "feels_like": 271.8,
                "temp_min": 275.41,
                "temp_max": 275.41,
                "pressure": 1009,
                "sea_level": 1009,
                "grnd_level": 972,
                "humidity": 65,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 803,
                    "main": "Clouds",
                    "description": "broken clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 59
            },
            "wind": {
                "speed": 3.76,
                "deg": 189,
                "gust": 8.75
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-18 00:00:00"
        },
        {
            "dt": 1731898800,
            "main": {
                "temp": 275.99,
                "feels_like": 272.34,
                "temp_min": 275.99,
                "temp_max": 275.99,
                "pressure": 1006,
                "sea_level": 1006,
                "grnd_level": 970,
                "humidity": 64,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04n"
                }
            ],
            "clouds": {
                "all": 93
            },
            "wind": {
                "speed": 4.02,
                "deg": 176,
                "gust": 10.88
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2024-11-18 03:00:00"
        },
        {
            "dt": 1731909600,
            "main": {
                "temp": 276.45,
                "feels_like": 272.84,
                "temp_min": 276.45,
                "temp_max": 276.45,
                "pressure": 1004,
                "sea_level": 1004,
                "grnd_level": 968,
                "humidity": 68,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 804,
                    "main": "Clouds",
                    "description": "overcast clouds",
                    "icon": "04d"
                }
            ],
            "clouds": {
                "all": 96
            },
            "wind": {
                "speed": 4.13,
                "deg": 175,
                "gust": 11.89
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2024-11-18 06:00:00"
        }
    ],
    "city": {
        "id": 702550,
        "name": "Lviv",
        "coord": {
            "lat": 49.842,
            "lon": 24.0316
        },
        "country": "UA",
        "population": 15000,
        "timezone": 7200,
        "sunrise": 1731476001,
        "sunset": 1731508993
    }
}