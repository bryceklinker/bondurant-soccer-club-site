import {GatsbyNode} from 'gatsby';
import {RouteNames} from './src/common/routing/route-names';

const createPages: GatsbyNode['createPages'] = ({graphql, actions}) => {
    const {createRedirect} = actions

    createRedirect({
        fromPath: '/get-involved',
        toPath: RouteNames.Volunteer,
        isPermanent: true
    })
    createRedirect({
        fromPath: '/referee-info',
        toPath: RouteNames.Volunteer,
        isPermanent: true
    })
    createRedirect({
        fromPath: '/concessions',
        toPath: RouteNames.Volunteer,
        isPermanent: true
    })
}

exports.createPages = createPages;
