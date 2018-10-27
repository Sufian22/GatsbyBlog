import React from 'react'
import { withStyles, Grid, Divider, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const styles = theme => ({
  blogTitle: {
    color: '#16937a',
  },
  subtitle1: {
    color: 'rgba(0, 0, 0, 0.5)',
  },
  divider: {
    height: 3,
    marginBottom: 10,
    marginTop: 10,
  },
})

function BlogHeader(props) {
  const { classes, title, date } = props
  return (
    <div>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h5" component="h3" className={classes.blogTitle}>
            {title}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" className={classes.subtitle1}>
            {date}
          </Typography>
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
    </div>
  )
}

BlogHeader.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default withStyles(styles)(BlogHeader)
