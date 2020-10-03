import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import content from './content';
import { Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: '50vh',
    width: '60%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 'auto',
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
    [theme.breakpoints.down('sm')]: {
      width: '95',
      flexDirection: 'column-reverse',
    },
  },
  profile: {
    width: '50%',
    [theme.breakpoints.down('md')]: {
      width: '100%',
    },
  },
  infoContainer: {
    maxWidth: '500px',
  },
  name: {
    fontSize: '4rem',
  },
  desc: {
    fontSize: '1.2rem',
  },
  input: {
    width: '300px',
    marginTop: theme.spacing(4),
  },
}));
export default function () {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.container}>
        <div className={classes.infoContainer}>
          <h1 className={classes.name}>{content.name}</h1>
          <p className={classes.desc}>{content.desc}</p>
          <Button variant="contained" color="primary">
            Contact Me
          </Button>
        </div>
        <img src={content.profile} alt="profile" className={classes.profile} />
      </div>
      <div className={classes.container}>
        <div>
          <form action="/contact" name="contact" method="post">
            <input type="hidden" name="form-name" value="contact" />
            <div className={classes.input}>
              <TextField
                variant="outlined"
                label="Full Name"
                name="name"
                fullWidth
              />
            </div>
            <div className={classes.input}>
              <TextField
                variant="outlined"
                label="Email"
                name="email"
                fullWidth
              />
            </div>
            <div className={classes.input}>
              <TextField
                variant="outlined"
                label="Message"
                name="message"
                multiline
                rows={10}
                fullWidth
              />
            </div>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </form>
        </div>
        <img
          src={content.contactImage}
          alt="contact"
          className={classes.profile}
        />
      </div>
    </div>
  );
}
