import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";


export default class Home extends Component {
  render() {
    return (
      <div style={{ margin: "0 auto", width: "1000px",height:"100vh",background:"white" }}>
         <h1 style={{ textAlign: "center",background:"#edf6f9"}}>Admin Home</h1>
        <Divider />
{/*     
        <a href="/create" style={{textDecoration:"none"}}>
        <Button style={{ background: "#e0e0e0", margin: "5px" }}>
          Create User
        </Button>

        </a>
        <a href="users" style={{textDecoration:"none"}}>
        <Button style={{ background: "#e0e0e0", margin: "5px" }}>
          View Users
        </Button>
        </a>  */}
        <a style={{textDecoration:"none"}} href="/create">
        <Paper
              onClick={(e) => {
                // this.addCart(e, item);
              }}
              style={{
                display: "flex",
                marginBottom: 0,
                borderRadius: 0,
                width: "100%",
              }}
            >
              <Card
                style={{ display: "flex", marginBottom: 0, borderRadius: 0 }}
              >
                <img
                  style={{
                    marginLeft: "1vw",
                    maxHeight: "64px",
                    marginTop: "4vh",
                  }}
                  src={"admin.png"}
                />
                <CardContent
                  style={{ paddingBottom: "0px", minHeight: "15vh" }}
                >
                  <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    {"Create User"}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      color: "rgb(118, 118, 118)",
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "20px",
                      fontFamily:
                        "DD-TTNorms, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
                    }}
                  >
                    {"Create a new user from the admin perspective"}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      fontWeight: 500,
                      fontSize: "14px",
                      fontFamily:
                        "DD-TTNorms, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
                    }}
                  ></Typography>
                </CardContent>
              </Card>
            </Paper>
            </a>
            <Divider />
            <a style={{textDecoration:"none"}} href="/users">
            <Paper
              onClick={(e) => {
                // this.addCart(e, item);
              }}
              style={{
                display: "flex",
                marginBottom: 0,
                borderRadius: 0,
                width: "100%",
              }}
            >
              <Card
                style={{ display: "flex", marginBottom: 0, borderRadius: 0 }}
              >
                <img
                  style={{
                    marginLeft: "1vw",
                    maxHeight: "64px",
                    marginTop: "4vh",
                  }}
                  src={"browser.png"}
                />
                <CardContent
                  style={{ paddingBottom: "0px", minHeight: "15vh" }}
                >
                  <Typography variant="h6" style={{ fontWeight: "bold" }}>
                    {"View Users"}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{
                      color: "rgb(118, 118, 118)",
                      fontSize: "14px",
                      fontWeight: "500",
                      lineHeight: "20px",
                      fontFamily:
                        "DD-TTNorms, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
                    }}
                  >
                    {"View all users that have signed up on the app"}
                  </Typography>
                  <Typography
                    variant="body1"
                    style={{
                      fontWeight: 500,
                      fontSize: "14px",
                      fontFamily:
                        "DD-TTNorms, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol",
                    }}
                  ></Typography>
                </CardContent>
              </Card>
            </Paper>
            </a>
            <Divider />




      </div>
    );
  }
}
