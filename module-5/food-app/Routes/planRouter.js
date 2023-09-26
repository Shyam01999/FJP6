const express = require('express');
const { isAuthorised, protectRoute } = require('../controller/authController');
const {getAllPlans, getPlan, createPlan, updatePlan, deletePlan} = require('../controller/planController')
const planRouter = express.Router();

//all plan leke ayega
planRouter
.route('/allPlans')
.get(getAllPlans)

//logged in necessary
planRouter.use(protectRoute)
planRouter
.route('/plan/:id')
.get(getPlan)

//admin or resturant owner can create, update, delete plans
planRouter.use(isAuthorised(['admin','resturantowner']))
planRouter
.route('/crudPlan')
.post(createPlan)

planRouter.use(isAuthorised(['admin','resturantowner']))
planRouter
.route('/crudPlan/:id')
.patch(updatePlan)

planRouter.use(isAuthorised(['admin','resturantowner']))
planRouter
.route('/crudPlan/:id')
.delete(deletePlan)

module.exports = planRouter





