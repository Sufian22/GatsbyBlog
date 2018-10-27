import React from 'react'
import { withStyles, Grow, Paper, Typography } from '@material-ui/core'
import BlogHeader from './BlogHeader'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
  },
})

function BlogEntry(props) {
  const { classes, title, date, content } = props
  return (
    <Grow in={true} {...(true ? { timeout: 1000 } : {})}>
      <Paper className={classes.root} elevation={1}>
        <BlogHeader title={title} date={date} />
        <Typography component="p">
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </Typography>
      </Paper>
    </Grow>
  )
}

export default withStyles(styles)(BlogEntry)
