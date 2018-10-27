import React from 'react'
import { Link } from 'gatsby'
import { Grid, Typography, withStyles } from '@material-ui/core';


const styles = {
  rootHeader: {
    background: '#16937a',
    marginBottom: '1.45rem',
  },
  headerContent: {
    margin: '0 auto',
    maxWidth: 960,
    padding: '0.8rem 1.0875rem',
  },
  imgRoot: {
    marginBottom: 0,
    height: 48,
    marginRight: 10
  },
  headerTitle: {
    color: 'white'
  }
}

const Header = ({ classes, siteTitle }) => (
  <div
    className={classes.rootHeader}
  >
    <div
      className={classes.headerContent}
    >
      
      <Grid container direction="row" alignItems="center" justify="center">
        <Grid item>
          <Link to="/">
            <img
              alt=""
              className={classes.imgRoot}
              src="https://s3-eu-west-1.amazonaws.com/pkihub-images/pkihub-logo.svg"
            />
          </Link>
        </Grid>
        <Grid item>
          <Link to="/">
            <Typography variant="h5" className={classes.headerTitle}>
              <strong>{siteTitle}</strong>
            </Typography>
          </Link>
        </Grid>
      </Grid>
      
    </div>
  </div>
)

export default withStyles(styles)(Header)
