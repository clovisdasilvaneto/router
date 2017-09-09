'use strict';

import BrowserRouter from '../src/BrowserRouter.js';

describe('BrowserRouter', function() {
    var browserRouter;

    afterEach(function() {
        if(browserRouter) {
            browserRouter.dispose();
        }
    });

    test('Should return initial location with hash', function(){
        browserRouter = new BrowserRouter();
        let contextRouter = browserRouter.getRouterContext();

        expect(contextRouter.route.location).toBe('#/');
    });

    test('Should return location without hash', function(){
        browserRouter = new BrowserRouter({
            hash: false,
        });
        let contextRouter = browserRouter.getRouterContext();

        expect(contextRouter.route.location).toBe('/');
    });

    test('Should return a route change with hash', function(){
        browserRouter = new BrowserRouter();
        let contextRouter = browserRouter.getRouterContext();

        contextRouter.route.change('/test', null);

        let location = contextRouter.route.location;

        expect(location).toBe('#/test');
        expect(location).not.toBeUndefined();
        expect(location).not.toBeNull();
    });

    test('Should return a route change without hash', function(){
        browserRouter = new BrowserRouter({
            hash: false
        });
        let contextRouter = browserRouter.getRouterContext();

        contextRouter.route.change('/test', null);

        let location = contextRouter.route.location;

        expect(location).toBe('/test');
    });

});
