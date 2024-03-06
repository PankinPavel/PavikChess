import { useDisplay } from 'vuetify'

export const getDeviceBreakpoint = () => {
    const { name } = useDisplay()

    return name.value
}