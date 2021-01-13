import React,{Component}from 'react';
import {
    View,
    Text,
    TextInput,
    Modal,
    KeyboardAvoidingView,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView} from 'react-native';


import db from '../config';
import firebase from 'firebase';

export default class SettingsScreen extends Component{
    constructor(){
        super()
        this.state={
        firstName:'',
        lastName:'',
        contact:'',
        address:'',
        emailId:'',
        docId:''
        }
    }
    getUserDetails(){
        var user=firebase.auth().currentUser
        var email=user.email
        db.collection('users').where('email_id','==',email).get()
        .then(snapshot=>{snapshot.forEach(doc=>{var data=doc.data()
        this.setState({
        emailId:data.email_id,
        firstName:data.first_name,
        lastName:data.last_name,
        address:data.address,
        contact:data.contact,
        docId:doc.id
        })})})

    }
    componentDidMount(){
        this.getUserDetails();
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={{alignItems:'center',fontSize:20}}>Settings</Text>
                <TextInput
          style={styles.formTextInput}
          placeholder ={"First Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              firstName: text
            })
          }}
          value={this.state.firstName}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Last Name"}
          maxLength ={8}
          onChangeText={(text)=>{
            this.setState({
              lastName: text
            })
          }}
          value={this.state.lastName}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Contact"}
          maxLength ={10}
          keyboardType={'numeric'}
          onChangeText={(text)=>{
            this.setState({
              contact: text
            })
          }}
          value={this.state.contact}
        />
        <TextInput
          style={styles.formTextInput}
          placeholder ={"Address"}
          multiline = {true}
          onChangeText={(text)=>{
            this.setState({
              address: text
            })
          }}
          value={this.state.address}
        />
        <TouchableOpacity
           style={styles.button}
            >
<Text style={styles.buttonText}>Save</Text>
         </TouchableOpacity> 
     
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
     flex:1,
     backgroundColor:'#F8BE85',
     alignItems: 'center',
     justifyContent: 'center'
   },
   formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10
  },
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:25,
    backgroundColor:"#ff9800",
    shadowColor: "#000",
  },
  buttonText:{
    color:'#ffff',
    fontWeight:'200',
    fontSize:20
  }

})