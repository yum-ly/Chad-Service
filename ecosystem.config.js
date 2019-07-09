module.exports = {
    apps: [{
      name: 'Chad',
      script: './server/server.js'
    }],
    deploy: {
      production: {
        // user used to authenticate
        user: 'ubuntu',
        // Where to connect
        host: 'ec2-52-14-174-92.us-east-2.compute.amazonaws.com',
        // Path to the private key to authenticate
        key: '~/.ssh/fec.pem',
        // The Git branch required
        ref: 'origin/master',
        // The path to the source code repository
        repo: 'https://github.com/yum-ly/Chad-Service.git',
        // 'path' is path on the host server where you want to deploy the source code 
        // 'post-deploy' allows you to specify a command to run after the deployment is complete
        path: '/home/ubuntu/service',
        'post-deploy': 'npm install && pm2 startOrRestart ecosystem.config.js'
      }
    }
  }