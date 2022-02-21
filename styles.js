import { StyleSheet } from "react-native"; 

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    backgroundColor:'#8c4aff',
    padding:10,
  },
  logo:{
    width:50,
    height:30,
    display:'flex',
    paddingBottom:10,
    paddingLeft:40
  },
  inner:{
    borderRadius:50,
    height:'80%',
    width:'100%'
  },
  Text:{
    fontWeight:'bold',
    alignContent:'flex-start',
    fontSize: 24, 
    textAlign:'left',
    color:'white'
  },
  head:{
    paddingTop:'10%',
    display:'flex',
    width:'100%',
    flexDirection:"row",
    justifyContent:'space-between',
    marginBottom:40
    
  },
  Welcome:{
    alignItems:'flex-start',
    justifyContent:'flex-start',
    width:'100%',
    paddingHorizontal:25,
    paddingBottom:10
 
  },
  askBox:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    paddingHorizontal:10,
    paddingVertical:20,
    backgroundColor:'#adadad',
    borderRadius:15,
    paddingBottom:20,
    justifyContent:'space-between'
  },
  containerIn: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems:'center',
    width:'100%',
    paddingHorizontal:12,
    backgroundColor: 'white',
    borderRadius:15,
  },
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  value: {
    fontWeight: '500',
    fontSize: 32,
    color: 'black'
  },
  maxValue:{
      fontWeight:'bold',
      fontSize:22,
      color:'#42b3f5'
  },
  head2:{
    fontWeight:'bold',
    fontSize:14,
    margin:10,
    
  },
  mainask:{
    alignContent:'flex-start',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    
  width:'100%'  },
crypto:{
  fontSize:14,
  fontWeight:'bold'
},
borrow:{
  fontSize:18,
  fontWeight:'bold'
},

minMax:{
  display:'flex',
  flexDirection:'row',
  paddingHorizontal:80,
  justifyContent:'space-between',
 
  alignItems:'center',


},
min:{

  width:'52%'
},
Val:{
  fontSize:20,
  fontWeight:'bold'
},

mainaskk:{
  justifyContent:'center',
  
},
nexticon:{
  justifyContent:'flex-start',
  alignItems:'flex-end',
  width:'100%',

}
});