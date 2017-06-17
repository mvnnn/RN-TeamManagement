import React, { Component } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import {Scene, Actions, Router} from 'react-native-router-flux';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { connect } from 'react-redux';
import { editMember, deleteMember } from '../actions';
const {height, width} = Dimensions.get('window');
const radio_props = [
  {label: "Regular - can't delete memebers", value: 0 },
  {label: "Admin - can delete memebers", value: 1 }
];

const styles = StyleSheet.create({
  input:{
    padding:8,
    height:40,
    borderColor:"grey",
    borderWidth: 1,
    borderRadius: 5,
    paddingBottom: 10,
    margin: 10
  },
  subTitle:{
    fontWeight:'bold',
    color:'black',
    fontSize:15,
    padding:10
  },
  radioButton:{
    padding:5
  },
  button: {
    height: 40,
    width : 0.4*(width),
    flexDirection: 'row',
    backgroundColor: '#751aff',
    borderColor: '#751aff',
    borderWidth: 1,
    // borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
     fontSize: 20,
     color: 'white',
     alignSelf: 'center',
   },
});

class EditMember extends Component {
  constructor(props) {
   super(props);
   this.state = {
    text: null,
    value: this.props.role,
    first_name: this.props.first_name,
    last_name: this.props.last_name,
    email: this.props.email,
    mobile_no: this.props.mobile_no
   };
 }

   firstNameChange(e){
    this.setState({
      first_name: e.nativeEvent.text
      })
    }

  lastNameChange(e){
    this.setState({
      last_name: e.nativeEvent.text
      })
    }

  emailChange(e){
    this.setState({
      email: e.nativeEvent.text
      })
    }

  mobileNumberChange(e){
    this.setState({
      mobile_no: e.nativeEvent.text
      })
    }

  render() {
    //  const {dispatch} = this.props;
    return (
      <View style={{paddingTop:50}}>
      <Text style={styles.subTitle}>Info</Text>
      <TextInput
        placeholder="Enter First Name"
        placeholderTextColor="grey"
        underlineColorAndroid="transparent"
        style={styles.input}
        onChange={this.firstNameChange.bind(this)}
        value={this.state.first_name}
      />
      <TextInput
        placeholder="Enter Last Name"
        placeholderTextColor="grey"
        underlineColorAndroid="transparent"
        style={styles.input}
        onChange={this.lastNameChange.bind(this)}
        value={this.state.last_name}
      />
      <TextInput
        placeholder="Enter Email ID"
        placeholderTextColor="grey"
        underlineColorAndroid="transparent"
        style={styles.input}
        onChange={this.emailChange.bind(this)}
        value={this.state.email}
      />
      <TextInput
        placeholder="Enter Mobile number"
        placeholderTextColor="grey"
        underlineColorAndroid="transparent"
        style={styles.input}
        onChange={this.mobileNumberChange.bind(this)}
        value={this.state.mobile_no}
      />
      <Text style={styles.subTitle}>Role</Text>
      <RadioForm
          radio_props={radio_props}
          initial={this.props.role}
          style={styles.radioButton}
          formHorizontal={false}
          labelHorizontal={true}
          buttonColor={'#2196f3'}
          animation={true}
          onPress={(value) => {this.setState({value:value})}}
        />
        <View style={{flexDirection:'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <View style={{justifyContent: 'center', alignItems: 'center',paddingTop:15}}>
          <TouchableHighlight
            style={[styles.button, {backgroundColor: 'white',borderColor: 'grey',}]}
            onPress={() => this.props.removePeople(this.state.email)}
            underlayColor="#b380ff">
            <Text style={[styles.buttonText,{color:'red'}]}>Delete</Text>
          </TouchableHighlight>
        </View>
        <View style={{justifyContent: 'center', alignItems: 'center',paddingTop:15}}>
          <TouchableHighlight
            style={styles.button}
            onPress={() => this.props.editPeople(this.state.first_name,this.state.last_name,this.state.email,this.state.mobile_no, this.state.value)}
            underlayColor="#b380ff">
            <Text style={styles.buttonText}>Save</Text>
          </TouchableHighlight>
        </View>
        </View>
      </View>
    );
  }
}


function mapStateToProps (state) {
  return {
    people: state.people
  }
}

function mapDispatchToProps (dispatch) {
  return {
    editPeople: (first_name,last_name,email,mobile_no,value) => dispatch(editMember(first_name,last_name,email,mobile_no,value)),
    removePeople: (email) => dispatch(deleteMember(email))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditMember)
