require('dotenv').config()
// require file system module
const fs = require('fs')
// require AWS SDK for Node.js
const AWS = require('aws-sdk')

// set the region for aws
AWS.config.update({ region: 'us-east-1' })
// console.log(AWS)

// create s3 service object
const s3 = new AWS.S3({apiVersion: '2006-03-01'})
console.log(s3)

const uploadParams = {
  Bucket: process.env.BUCKET_NAME,
  Key: 'anything',
  Body: '',
  ACL: 'public-read'
}

const fileStream = fs.createReadStream(process.argv[2])
fileStream.on('error', function (err) {
  console.log('File Error', err)
})
uploadParams.body = fileStream

s3.upload(uploadParams, function (err, data) {
  if (err) {
    console.log('Error', err)
  } if (data) {
    console.log('Upload Success', data.Location)
  }
})
