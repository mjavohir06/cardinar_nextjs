import ru from './src/messages/ru.json'

type Messages = typeof ru

declare global {
    interface IntlMessages extends Messages {}
}