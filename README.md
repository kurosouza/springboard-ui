# springboard - small business loans and payments 

*Software architecture document*

*Author: Kuro Souza*

*Created: Saturday 03 April 2021*

## Introduction and Goals

Springboard is a small business assistance network where business owners can assist each other to fund small, business expansion projects. With springboard, businesses can register and provide a valid identity using the NEM Symbol blockchain. This identity can be verified by other members of the network. 

They can raise funds by posting a project including information about how much they need to run the project. Other business owners on the network can view information about their organisation and their project and they can decide to provide part of the money for the project.

The business lending and funding system is run on a private blockchain.

By joining the springboard network, small businesses also get access to a payment system for receiving payment for product and services from their customers. Customers can purchase goods and services by going to the business page, browsing to the product of interest and paying from their Symbol platform wallet.

### Requirements Overview

| CODE | NAME              | DESCRIPTION                                                  |
| ---- | ----------------- | ------------------------------------------------------------ |
| R01  | Register Business | A business supplies their basic business information including (Name, Address, Description) |
| R02  | Create Project    | A business creates a Project (Name, Description, Amount)     |
| R03  | View Payments     | A business owner can view all payments made to their business. A business owner can view the total payments made to a business whose project they want to fund |
| R04  | Add Product       | A business owner can add a product to their list of available products |
| R05  | Manage Products   | A business owner can de-list a product or group of products from their page |
| R06  | Buy Product       | A customer can buy a product from a business owner's page. They can be sure that the product is authentic because they can verify the authenticity of the business |

Quality Goals



### Stakeholders

| Name                      | Description                                                  |
| ------------------------- | ------------------------------------------------------------ |
| Business / Business Owner | A business is an independent entity that provides a product or service to customers |
| Customer                  | A customer is an individual or group of individuals that can purchase a product or service from a business |
|                           |                                                              |



### Constraints

The application is powered by the NEM Symbol blockchain. 

+ It uses a private blockchain to verify businesses and facilitate lending
+ It uses a public blockchain to receive payments from customers



Context and Scope

Business Context

Technical Context