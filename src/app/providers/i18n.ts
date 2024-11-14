import { createI18n } from 'vue-i18n'

const defaultLocale = localStorage.getItem('locale') || 'en';

export const i18n = createI18n({
    locale: defaultLocale,
    fallbackLocale:'en',
    messages: {
        uk: {
            header: {
                home: 'Домашня',
                favorite: 'Вибрані'
            },
            weather: {
                yes: 'так',
                no: 'ні',
                addCard: 'добавити картку',
                day: 'день',
                night: 'ніч',
                deleteCard: 'видалити картку',
                areYouSure: 'ви впевнені що хочете видалити картку?',
                addFavorite: 'добавити картку до вибраних',
                removeFavorite: 'видалити картку з вибраних',
                temperature: 'температура',
                feelsLike: 'відчувається як',
                wind: 'вітер',
                humidity: 'вологість',
                pressure: 'тиск',
                visibility: 'видимість',
                fiveDays: '5 днів',
                oneDays: '1 день',
                forecast5days: 'прогноз на 5 днів',
                forecast1day: 'прогноз на 24 години',
                enterCity: 'введіть місто по-англійськи'
            }
        },
        en: {
            header: {
                home: 'Home',
                favorite: 'Favorite'
            },
            weather: {
                yes: 'yes',
                no: 'no',
                addCard: 'Add card',
                day: 'day',
                night: 'night',
                deleteCard: 'delete card',
                areYouSure: 'Are you sure to delete the card?',
                addFavorite: 'Add to favorite',
                removeFavorite: 'Remove from favorite',
                temperature: 'temperature',
                feelsLike: 'feels like',
                wind: 'wind',
                humidity: 'humidity',
                pressure: 'pressure',
                visibility: 'visibility',
                fiveDays: '5 days',
                oneDays: '1 days',
                forecast5days: 'forecast for 5 days',
                forecast1day: 'forecast for 24 hours',
                enterCity: 'enter city name'
            }
        }
    }
})
