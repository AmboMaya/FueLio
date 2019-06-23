import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const styles = ({
  logo:{
  fontFamily: 'Bungee Inline',
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 0,
  }
})

class Header extends React.Component {
  render() {
    const { classes } = this.props

    return (
      <AppBar position='static'>
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.logo} variant='h4' color='inherit' noWrap>
            FUELIO
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Header)
