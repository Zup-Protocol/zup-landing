// GENERATED FILE. PLEASE DO NOT EDIT THIS FILE!!

import 'package:routefly/routefly.dart';

import 'app/app_page.dart' as a1;
import 'app/mint/mint_page.dart' as a0;

List<RouteEntity> get routes => [
      RouteEntity(
        key: '/mint',
        uri: Uri.parse('/mint'),
        routeBuilder: (ctx, settings) => Routefly.defaultRouteBuilder(
          ctx,
          settings,
          const a0.MintNFTPage(),
        ),
      ),
      RouteEntity(
        key: '/',
        uri: Uri.parse('/'),
        routeBuilder: (ctx, settings) => Routefly.defaultRouteBuilder(
          ctx,
          settings,
          const a1.AppPage(),
        ),
      ),
    ];

const routePaths = (
  path: '/',
  mint: '/mint',
);
