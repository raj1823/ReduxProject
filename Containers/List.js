import {connect} from 'react-redux'
import ListComponent from '../Components/ListComponent'
import {dataFetch,queryDataFetch} from '../Data_Service/fetchData'


const mapStateToProps=(state)=>({
   storedData: state.data_Reducer.storedData,
   

})

const mapDispatchToProps=({
fetch_data: queryDataFetch,

  



})

export default connect(mapStateToProps,mapDispatchToProps)(ListComponent)