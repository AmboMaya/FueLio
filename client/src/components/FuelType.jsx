import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Fab from '@material-ui/core/Fab'


const styles = ({
  buttonGreen: {
    margin: 30,
    marginTop: 40,
    color: '#fff',
    backgroundColor: '#109121',
    width: 100,
    height: 100
  },
  buttonYellow: {
    margin: 30,
    marginTop: 40,
    color: '#fff',
    backgroundColor: '#ffea00',
    width: 100,
    height: 100
  },
  buttonBlue: {
    margin: 30,
    marginTop: 40,
    color: '#fff',
    backgroundColor: '#0091ea',
    width: 100,
    height: 100
  },
  buttonBlack: {
    margin: 30,
    marginTop: 40,
    color: '#fff',
    backgroundColor: '#000000',
    width: 100,
    height: 100
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
    textShadow: '2px 2px #ff0000'

  }
})

class Prices extends React.Component {

  render() {
    const { classes } = this.props
    return (
      <div className={classes.row} spacing={16}>
        <Fab color="secondary" className={classes.buttonGreen} onClick={()=>{this.props.fuelTypeSelector('91')}}> 91 </Fab>
        <Fab color="secondary" className={classes.buttonYellow} onClick={()=>{this.props.fuelTypeSelector('95')}}> 95 </Fab>
        <Fab color="secondary" className={classes.buttonBlue} onClick={()=>{this.props.fuelTypeSelector('98')}}> 98 </Fab>
        <Fab color="secondary" className={classes.buttonBlack} onClick={()=>{this.props.fuelTypeSelector('diesel')}}> Diesel </Fab>
      </div>
    )
  }
}

Prices.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Prices);

