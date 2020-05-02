# What is a Servless Architecture?

Serverless architecture (also known as serverless computing or function as a service, FaaS) is a software design pattern where applications are hosted by a third-party service, eliminating the need for server software and hardware management by the developer. Applications are broken up into individual functions that can be invoked and scaled individually.

# Why Serverless Architecture?

Hosting a software application on the internet usually involves managing some kind of server infrastructure. Typically this means a virtual or physical server that needs to be managed, as well as the operating system and other web server hosting processes required for your application to run. Using a virtual server from a cloud provider such as Amazon or Microsoft does mean the elimination of the physical hardware concerns, but still requires some level of management of the operating system and the web server software processes.

With a serverless architecture, you focus purely on the individual functions in your application code. Services such as Twilio Functions, AWS Lambda and Microsoft Azure Functions take care of all the physical hardware, virtual machine operating system, and web server software management. You only need to worry about your code.

# Reasons to use Serveless Architecture

Currently, most of the technology adopters are startups who seek for a possibility to scale painlessly and lower the entrance barrier. Serverless is also a perfect approach for applications that don’t run continuously but rather have quiet periods and peaks of traffic.

## Internet of Things applications

The real-time response nature of the serverless approach works great for IoT use cases. Motion activated cameras that we’ve already mentioned, along with applications that react to changes in weather, temperature, or health conditions are perfect for the serverless paradigm that won’t allow your services to sit idle 24/7.

## Virtual assistants and chatbots

People using chats expect immediate responses which is why serverless data processing can be faster. As your application grows from one hundred to several thousand users, your processing time should also stay the same which is automated with FaaS.

## Image-rich applications

To maintain great user experience, developers have to provide multiple versions of the same images for different screen sizes – from desktops, to tablets and smartphones. This significantly decreases loading time. However, the tooling from AWS and Google will automatically optimize your images for any needs, making it a perfect solution for image-heavy applications.

## Agile and Continuous Integration pipelines

The idea of running the code only when a certain event is triggered is perfectly in line with Agile or Continuous Integration principles. Separating your codebase into functions also helps with bug fixing and shipping updates. Serverless is an overall friendly way for maximum automation and rapid deployment processes.

# Reasons Not to Use Serverless

## Your Workloads are Constant
Serverless is ideal for deploying workloads that fluctuate rapidly in volume. If you have a workload that is relatively constant, however—like a web application whose traffic does not change by magnitudes from hour to hour—you’ll gain little from serverless.
So, before moving code to a serverless platform just because everyone is talking about it, consider whether the massive scalability and on-demand execution features of serverless will actually help you.

## You Fear Vendor Lock-In
Most serverless platforms are tied to particular cloud-computing vendors. Even those that are designed to be pure-play and open source, like OpenWhisk, are not compatible with each other.
A day may come when community standards arise around serverless computing, and they will do for serverless what the OCI has done for containers. But that day has not come.
While it’s possible to migrate serverless workloads from one platform to another, doing so requires significant manual effort. You can’t use Lambda one day and switch to Azure Functions the next.
What this means is that, if you use serverless today, you should expect to be bound to whichever particular platform you use for the foreseeable future. For organizations that loathe lock-in, this could be a compelling reason to steer clear of serverless platforms.

## You Need Advanced Monitoring
The relative novelty of serverless as a widely used deployment solution also means that the ecosystem of monitoring and security tools for serverless functions remains immature.
Some vendor tools exist that claim to be able to support serverless monitoring, and more will likely appear over time. But for now, the feature sets remain relatively basic.
If you want robust monitoring solutions for serverless environments, now may not be the time to start using serverless.

## You Have Long-Running Functions
One of the main limitations of serverless solutions like Lambda is that each serverless code instance can run for a limited amount of time (five minutes in the case of Lambda).
In the case of most workloads that are good candidates for serverless, this time is more than sufficient. But if you have a workload that is delayed by, for example, network bandwidth limitations, it may not be able to complete in time. You can work around this by chaining serverless instances together, but that’s a clumsy solution, and you’d be better off in most cases by simply sticking to other deployment solutions.

## You Use an Unsupported Language
Not every kind of function can be moved to a serverless platform. Most serverless environments support only code written in specific languages. In some cases, you can use wrappers or other tricks to run other types of code, but in general, your options are limited to a core set of popular programming languages.
If you choose to write a given function in a language that is not supported by your serverless platform of choice, then you simply can’t use serverless computing for that particular workload.

## Security Sensitive Applications – AWS Lambda
AWS claim that it takes care of Lambda security very well. But remember one thing: Lambda functions are running in a shared VPC that may be shared with other customers in a multi-tenancy setup. So, if an application has highly sensitive data, and security is your primary concern, Lambda functions should be running under a dedicated VPC or use EC2 only. And don’t forget, running the Lambda under VPC has its own challenges like increased cold start time, limited concurrent executions, etc.

# What does Serverless really cost?

For most of the people opting for serverless, the major cost drivers would not be AWS Lambda but API Requests, storage and network transfers.

## API Requests
As discussed in the previous section, it is obvious that our serverless apps are going to be API heavy and its significance is undeniable. This will cost you around $3.50 per million executions.

## Networking
If you’re sending data in/out, you need to carefully monitor the cost of this. At $0.50-$0.90 per GB-out and $0.1-$0.2 between VPCs/regions on AWS. This has high chances of getting really expensive.

## Code Maintenance
Serverless coding equals to more lines of code. For each new functionality added to the software system, the number of lines of each function needed to maintain the software’s functionality grows at a steep linear rate. Since the shared code is an antipattern, each function has to have its own logic.

## Cold Start
You may read more about it in our serverless performance blog. Since cold start increases the execution time it is directly proportional to the costing. Additionally, for a startup, an added latency of 100 ms can be a driving factor for users to adopt or discard the product.

# Tools to help create Lambdas

- [AWS Serverless Application Model](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html)
- [How Debug AWS Lambdas](https://lumigo.io/debugging-aws-lambda-serverless-applications/)

Create SAM Template:
```bash
sam init
cd lambda-example
sam build
```

Run SAM locally:
```bash
sam local start-api
```

Execute function:
```bash
curl http://127.0.0.1:3000/hello
``` 

Debug it locally:
```bash
sam local invoke -d 5858 -e events/event.json HelloWorldFunction
```

Deploy it to AWS:
```bash
sam deploy --guided 
```

Check logs after deploy function:
```bash
sam logs -n HelloWorldFunction --stack-name lambda-example --tail
```

Run Unit Tests:
```bash
cd hello-world
unit-tests-path$ npm install
unit-tests-path$ npm run test
```

Delete Lambda from AWS:
```bash
aws cloudformation delete-stack --stack-name lambda-example
```

# Open Source Framework to deploy Faas (Function as a Service):

- [Serverless Framework](https://github.com/serverless/serverless)
- [Explanation how works Serverless Paas](https://www.youtube.com/watch?v=-Nf0ui3qP2E)

# Tools to help monitoring Servless applications:

- Epsagon
- Thundra
- Dashbird
- Stackery
- IOpipe
- Lumigo

# How to debug serverless application:

https://lumigo.io/debugging-aws-lambda-serverless-applications/
https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/what-is-sam.html
https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/sam-cli-command-reference-sam-local-start-api.html

# Questions to Consider Before Jumping into Cost Optimization

## What is the contribution of AWS Lambda pricing to your total bill?
Serverless applications consist of databases, storage, network costs, APIs, data processing systems to name a few. Considering the percentage of AWS Lambda cost to the overall application cost, you will have to see whether it is worth running cost optimization cycles or not.

## What is your app’s requirement in terms of the performance?
Before iterating functions memory allocation for the sake of lower cost, consider this: memory allocation has a significant impact on the cold start and runtime, both of which are directly proportional to the cost. Hence, if your app requires low latency performance then opting for degraded performance at lower cost won’t be a recommended solution.

## Which and how many of the functions of your app are frequently used?
Not every one of your functions will be invoked at the same frequency. Hence, focusing cost optimization for functions with high frequency is recommended, for example, functions having hundreds of thousands or millions number of invocations.

# References

- [Thinking twice about migrating to Serverless, with Edwin Derks](https://www.youtube.com/watch?v=SWttiRCJSUE)
- [Containers x Serverless](https://www.thorntech.com/2018/08/containers-vs-serverless/)
