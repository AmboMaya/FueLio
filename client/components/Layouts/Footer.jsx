import React from 'react'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'



const styles = ({
  logo:{
  fontFamily: 'Bungee Inline',
  alignItems: 'center',
  marginBottom: 0
  }
})

class Footer extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <Toolbar>
        <i className="far fa-copyright"></i>
        <Typography className={classes.logo} variant='h5' color='inherit' noWrap>
            FUELIO
        </Typography>
      </Toolbar>
     
    )
  }
}


Footer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Footer)
