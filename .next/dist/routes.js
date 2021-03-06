'use strict';

var routes = require('next-routes')();

routes.add('/projects/new', '/projects/new').add('/projects/:address', '/projects/show').add('/projects/:address/requests', '/projects/requests/index').add('/projects/:address/requests/new', '/projects/requests/new');

module.exports = routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvdXRlcy5qcyJdLCJuYW1lcyI6WyJyb3V0ZXMiLCJyZXF1aXJlIiwiYWRkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNLFNBQVMsQUFBZjs7QUFFQSxPQUNDLEFBREQsSUFDSyxBQURMLGlCQUNzQixBQUR0QixpQkFFQyxBQUZELElBRUssQUFGTCxzQkFFMkIsQUFGM0Isa0JBR0MsQUFIRCxJQUdLLEFBSEwsK0JBR29DLEFBSHBDLDRCQUlDLEFBSkQsSUFJSyxBQUpMLG1DQUl3QyxBQUp4Qzs7QUFNQSxPQUFPLEFBQVAsVUFBaUIsQUFBakIiLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6Ii9ob21lL2dyb290L2VkLWFwcCJ9