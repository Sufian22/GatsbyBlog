import React from 'react'
import { withStyles, Grow, Paper, Typography } from '@material-ui/core'
import { Link } from 'gatsby'
import BlogHeader from './BlogHeader'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
})

function BlogListItem(props) {
  const { classes, title, date, description, timeout, path } = props
  return (
    <Link to={path}>
      <Grow in={true} {...(true ? { timeout: timeout } : {})}>
        <Paper className={classes.root} elevation={1}>
          <BlogHeader title={title} date={date} />
          <Typography component="p">{description}</Typography>
        </Paper>
      </Grow>
    </Link>
  )
}

export default withStyles(styles)(BlogListItem)
