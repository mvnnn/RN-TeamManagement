import React, { Component } from 'react'
import { TouchableHighlight, View, Text, StyleSheet, Dimensions, Image } from 'react-native'

import { connect } from 'react-redux'
import { fetchData } from '../actions'
const {height, width} = Dimensions.get('window')
import { Card, Avatar, Divider } from 'react-native-material-design'
import {Scene, Actions, Router} from 'react-native-router-flux'


let styles

class TeamMembers extends Component {
  constructor(props) {
   super(props);
 }

 componentDidMount(){
   this.props.getPeople();
 }

 render() {
  const {
    container,
    text,
    button,
    buttonText
  } = styles
  const { people, isFetching } = this.props.people;
  return (
    <View style={container}>
      {
        isFetching && <Text>Loading</Text>
      }
      {
        people.length ? (
          people.map((person, i) => {
            return <Card key={i} style={{flexDirection:'row', marginTop: -5}}>
                          <View style={{flexDirection:'column'}}>
                          <TouchableHighlight
                            key={i}
                            onPress={() => Actions.editMember({first_name:person.first_name,last_name:person.last_name,email:person.email,mobile_no:person.mobile_no, role:person.role})}
                            underlayColor="#666666">
                            <View style={{flexDirection:'row'}}>
                            <Card.Body>
                              <View style={{flexDirection:'row'}}>
                              <Avatar image={<Image source= {require("../images/people.png")} /> } backgroundColor="paperGrey"/>
                            <View style={{flexDirection:'column'}}>
                            <View style={{marginLeft:5,flexDirection:'row'}}>
                              <Text style={{color:'black'}}>{person['first_name']}</Text>
                              <Text style={{marginLeft:5,color:'black'}}>{person['last_name']}</Text>
                              </View>
                              <Text style={{marginLeft:5}}>{person['mobile_no']}</Text>
                              <Text style={{marginLeft:5}}>{person['email']}</Text>
                              </View>
                              </View>
                            </Card.Body>
                          </View>
                          </TouchableHighlight>
                          <Divider/>
                        </View>
                        </Card>
          })
        ) : null
      }
    </View>
  )
}
}

styles = StyleSheet.create({
  container: {
    marginTop: 100,
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    textAlign: 'center'
  },
  button: {
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0b7eff'
  },
  buttonText: {
    color: 'white'
  }
})

function mapStateToProps (state) {
  return {
    people: state.people
  }
}

function mapDispatchToProps (dispatch) {
  return {
    getPeople: () => dispatch(fetchData())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamMembers)
