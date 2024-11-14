import { List, WeatherCard, WeatherData } from "@/shared/types/weather";
import { defineStore } from "pinia";
import { v4 } from "uuid";

export const useWeather = defineStore('weather', {
    state: () => {
        return {
            favorite: [] as WeatherCard[],
            base: [] as WeatherCard[]
        }
    },
    actions: {
        changeCity(id: string, weather: WeatherData) {
            this.base = this.base.map((el) => {
                if (el.id === id) {
                    return { ...el, weather }
                } else {
                    return el
                }
            })

        },
        switchDays(where: List, id: string) {
            this[where] = this[where].map((el) => {
                if (el.id === id) {
                    return { ...el, mode: el.mode === '1day' ? '5day' : '1day' }
                } else {
                    return el
                }
            })
        },

        switchVariant(where: List, id: string) {
            this[where] = this[where].map((el) => {
                if (el.id === id) {
                    return { ...el, variant: el.variant === 'day' ? 'night' : 'day' }
                } else {
                    return el
                }
            })
        },

        createCard(where: List, weather?: WeatherData) {
            if (this[where].length >= 5) {
                return
            }
            this[where].push(
                {
                    id: v4(),
                    mode: '1day',
                    variant: 'day',
                    weather: weather ?? null
                }
            )
        },

        deleteCard(where: List, id: string) {
            this[where] = this[where].filter((el) => el.id !== id)
        },

        addOrRemoveFavorite(where: List, to: List, id: string) {
            const foundCard = this[where].find((el) => el.id === id)

            if (foundCard && this[to].length < 5) {
                if (foundCard.weather) {
                    this[where] = this[where].filter((el) => foundCard.id !== el.id)
                    this[to].push(foundCard)
                }

            } else {
                return "so many cards"
            }
        }
    }
})