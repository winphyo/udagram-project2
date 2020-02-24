export const config = {
  "dev": {
    "username": "postgres",
    //"username": process.env.POSTGRESS_USERNAME,
    "password": "postgres",
    "database": "udagramdev",
    "host": "udagramdev.chhjjps1fatp.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "url": "http://localhost:8080",
    "aws_media_bucket": "udagram-win-dev"
  },
  "prod": {
    "username": "postgres",
    "password": "postgres",
    "database": "udagramdev",
    "host": "udagramdev.chhjjps1fatp.us-east-1.rds.amazonaws.com",
    "dialect": "postgres"
  },
  "jwt" :
  {
    "secret" : "winphyothein"
  }

}
