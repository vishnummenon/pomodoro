import React from 'react'
import {StyleSheet, Text, View, Vibration, TouchableOpacity, Dimensions} from 'react-native'
import PropTypes from 'prop-types'

const screen = Dimensions.get('window')

const styles = StyleSheet.create({
  text: {fontSize: 72},
  control: {
	  borderWidth: 6,
	  borderColor: 'yellow',
	  width: screen.width/3,
	  height: screen.width/3,
	  borderRadius: screen.width/3,
	  alignItems: 'center',
	  justifyContent: 'center'
  },
  buttonText: {
	  fontSize: 30,
	  color: 'yellow'
  }
})


class Count extends React.Component {
  static propTypes = {
    count: PropTypes.number.isRequired
  }
  constructor(props) {
	  super(props)
	  this.state ={
		  isActive: false,
		  count: 10,
		  period: "Work"
		  }
  }
  
  componentDidMount() {
		  this.interval = setInterval(this.inc, 1000)
  }
  
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  
  inc = () => {
	  if(this.state.isActive){
		  if(this.state.count > 0) {
		  this.setState(prevState => ({
			  count: prevState.count - 1,
			}))
		}
		else {	
		  this.toggleState()
		}
	  }
  }
  
  toggleState = () => {
	  Vibration.vibrate(1000)
	  if(this.state.period === "Work") {
		  this.setState(nextState => ({
			  count: 5,
			  period: "Rest"
		  }))
		  return true
	  }
	  if(this.state.period === "Rest") {
		  this.setState(nextState => ({
			  count: 10,
			  period: "Work"
		  }))
		  return true
	  }
  }
  
  toggle = () => {
	  this.setState(prevState => ({
    isActive: !prevState.isActive,
  }))
  }
  
  reset = () => {
	  console.log(this.state.isActive)
	  this.setState(prevState => ({
    count: 10,
	period: "Work",
    isActive: false,
  }))
  }

  render() {
    return (
	//slice to append extra zero to one digit values in time -- negative parameter slices from end of the array
	<View>
	<TouchableOpacity style={styles.control} onPress={this.toggle} >
		<Text style={styles.buttonText}>{this.state.isActive ? 'Stop' : 'Start'}</Text>
	</TouchableOpacity>
	
	<TouchableOpacity style={styles.control} onPress={this.reset} >
		<Text style={styles.buttonText}>Reset</Text>
	</TouchableOpacity>
	
	<Text style={styles.text}>
		{this.state.period}
	</Text>

      <Text style={styles.text}>
        {("0" + Math.floor(this.state.count/60)).slice(-2) + ":" + ("0" + (this.state.count - Math.floor(this.state.count/60) * 60)).slice(-2)}
      </Text>
	  </View>
    )
  }
}

export default Count
