import { filterDocSet } from './filterDocSet'
import heading1 from './mocks/byCountries'

const monthNames = [
    'Enero',
    'Febrero',
    'Marzo',
    'Abril',
    'Mayo',
    'Junio',
    'Julio',
    'Agosto',
    'Septiembre',
    'Octubre',
    'Noviembre',
    'Diciembre',
]

const monthWidth = 250
const svgLineHeight = 50
const lineWidth = monthNames.length * monthWidth

export { monthNames, monthWidth, svgLineHeight, lineWidth }
