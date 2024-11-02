import 'package:flutter/material.dart';
import 'package:routefly/routefly.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:zup_landing/gen/assets.gen.dart';
import 'package:zup_landing/routes.g.dart';
import 'package:zup_ui_kit/buttons/buttons.dart';
import 'package:zup_ui_kit/zup_colors.dart';

class AppPage extends StatefulWidget {
  const AppPage({super.key});

  @override
  State<AppPage> createState() => _AppPageState();
}

class _AppPageState extends State<AppPage> {
  final double horizontalScreenPadding = 20;

  bool isMobile(BoxConstraints constraints) => constraints.maxWidth < 600;
  bool isHoveringX = false;
  bool isHoveringTelegram = false;

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        alignment: Alignment.centerLeft,
        alignment: Alignment.centerLeft,
        children: [
          Align(
            alignment: Alignment.centerLeft,
            child: Assets.icons.bolt.svg(
              colorFilter: const ColorFilter.mode(
                ZupColors.gray6,
                BlendMode.srcIn,
              ),
              height: MediaQuery.sizeOf(context).height,
            ),
          ),
          Align(
            alignment: Alignment.centerLeft,
            child: Assets.icons.bolt.svg(
              colorFilter: const ColorFilter.mode(
                ZupColors.gray6,
                BlendMode.srcIn,
              ),
              height: MediaQuery.sizeOf(context).height,
            ),
          ),
          CustomScrollView(
            slivers: [
              SliverPadding(
                padding: const EdgeInsets.all(20),
                sliver: SliverFillRemaining(
                  hasScrollBody: false,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Center(child: Assets.logos.zup.svg(height: 120)),
                      const SizedBox(height: 20),
                      Align(
                        alignment: Alignment.center,
                        child: Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 65)
                              .copyWith(top: 0),
                          child: const Text(
                            textAlign: TextAlign.center,
                            "Your very first liquidity pool agreggator",
                            style: TextStyle(
                              fontSize: 18,
                              color: ZupColors.brand,
                              fontWeight: FontWeight.w600,
                            ),
                          ),
                        ),
                      ),
                      // const SizedBox(height: 24),
                      const Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [],
                      ),
                      const SizedBox(height: 40),
                      Wrap(
                        // mainAxisSize: MainAxisSize.min,
                        runSpacing: 20,
                        spacing: 20,
                        alignment: WrapAlignment.center,
                        crossAxisAlignment: WrapCrossAlignment.center,
                        children: [
                          ZupPrimaryButton(
                            title: "Mint your OG NFT",
                            border: const BorderSide(color: ZupColors.brand),
                            backgroundColor: ZupColors.brand,
                            foregroundColor: ZupColors.white,
                            onPressed: () => Routefly.navigate(routePaths.mint),
                            padding: EdgeInsets.zero,
                            fixedIcon: true,
                            icon: Assets.icons.bolt.svg(height: 18),
                            width: 200,
                          ),
                          ZupPrimaryButton(
                            title: "Waitlist",
                            onPressed: () => launchUrl(
                              Uri.parse("https://waitlist.zupprotocol.xyz"),
                            ),
                            backgroundColor: Colors.transparent,
                            foregroundColor: ZupColors.brand,
                            border: const BorderSide(color: ZupColors.brand),
                            hoverElevation: 0,
                            fixedIcon: true,
                            width: 200,
                            padding: EdgeInsets.zero,
                            icon: Assets.icons.listClipboard.svg(),
                          ),
                          ZupPrimaryButton(
                            title: "Docs",
                            hoverElevation: 0,
                            border: const BorderSide(color: ZupColors.brand),
                            backgroundColor: Colors.transparent,
                            foregroundColor: ZupColors.brand,
                            onPressed: () => launchUrl(
                              Uri.parse(
                                  "https://zupprotocol.notion.site/Zup-Documentation-1155a07f86f68059a5e2f2c1cfdf9be2?pvs=4"),
                            ),
                            padding: EdgeInsets.zero,
                            fixedIcon: true,
                            icon: Assets.icons.textPage.svg(),
                            width: 200,
                          ),
                        ],
                      ),
                      const SizedBox(height: 30),
                      Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          MouseRegion(
                            cursor: SystemMouseCursors.click,
                            onEnter: (event) => setState(
                              () => isHoveringX = true,
                            ),
                            onExit: (event) => setState(
                              () => isHoveringX = false,
                            ),
                            child: GestureDetector(
                              child: Assets.logos.x.svg(
                                height: 34,
                                colorFilter: ColorFilter.mode(
                                  ZupColors.gray4,
                                  isHoveringX ? BlendMode.dst : BlendMode.srcIn,
                                ),
                              ),
                              onTap: () => launchUrl(
                                Uri.parse("https://x.com/zup_protocol"),
                              ),
                            ),
                          ),
                          const SizedBox(width: 24),
                          MouseRegion(
                            cursor: SystemMouseCursors.click,
                            onEnter: (event) => setState(
                              () => isHoveringTelegram = true,
                            ),
                            onExit: (event) => setState(
                              () => isHoveringTelegram = false,
                            ),
                            child: GestureDetector(
                              child: Assets.logos.telegram.svg(
                                height: 34,
                                colorFilter: ColorFilter.mode(
                                  ZupColors.gray4,
                                  isHoveringTelegram
                                      ? BlendMode.dst
                                      : BlendMode.srcIn,
                                ),
                              ),
                              onTap: () => launchUrl(
                                Uri.parse("https://t.me/zupprotocol"),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
              SliverToBoxAdapter(
                child: Column(
                  children: [
                    const SizedBox(height: 50),
                    Assets.images.demo.image(height: 400),
                    const SizedBox(height: 200),
                  ],
                ),
              )
            ],
          ),
        ],
      ),
    );
  }
}
