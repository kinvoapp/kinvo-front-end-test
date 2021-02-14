import base from './base'

export default {
    getFixedIncomeData(){
        return base.get('/getFixedIncomeClassData')
    }
}