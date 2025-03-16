import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:zup_landing/gen/assets.gen.dart';
import 'package:zup_landing/widgets/app_header.dart';
import 'package:zup_ui_kit/buttons/buttons.dart';
import 'package:zup_ui_kit/zup_colors.dart';

class AppPage extends StatelessWidget {
  const AppPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: LayoutBuilder(builder: (context, constraints) {
        return CustomScrollView(
          slivers: [
            const SliverAppBar(
              clipBehavior: Clip.none,
              pinned: true,
              forceMaterialTransparency: true,
              title: AppHeader(),
              toolbarHeight: 80,
              backgroundColor: Colors.white,
              surfaceTintColor: Colors.white,
              elevation: 0,
            ),
            SliverToBoxAdapter(
              child: Center(
                child: AnimatedPadding(
                  duration: const Duration(milliseconds: 500),
                  padding: EdgeInsets.symmetric(
                    horizontal: constraints.maxWidth > 1000 ? 100 : 20,
                  ).copyWith(bottom: 30, top: 10),
                  child: Container(
                    constraints: const BoxConstraints(maxWidth: 1400),
                    padding: const EdgeInsets.all(40),
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(40),
                      color: ZupColors.brand7,
                    ),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.start,
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Row(
                          children: [
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                mainAxisAlignment: MainAxisAlignment.start,
                                children: [
                                  FittedBox(
                                    child: Text(
                                      "Your Liquidity Pool\nAggregator.",
                                      // maxLines: 4,
                                      style: TextStyle(
                                        color: ZupColors.brand,
                                        fontWeight: FontWeight.bold,
                                        fontSize: constraints.maxWidth > 1000
                                            ? 54
                                            : 34,
                                      ),
                                    ),
                                  ),
                                  if (constraints.maxWidth < 600)
                                    Center(
                                      child: Assets.images.cryptosExchanges
                                          .image(width: 400),
                                    ),
                                  const SizedBox(height: 30),
                                  const Text(
                                    "Discover and Deposit in the Best Liquidity Pool for you",
                                    style: TextStyle(
                                        color: ZupColors.black,
                                        fontSize: 17,
                                        fontWeight: FontWeight.w500),
                                  ),
                                  const Text(
                                    "In one platform",
                                    style: TextStyle(
                                      color: ZupColors.brand,
                                      fontSize: 16,
                                      fontWeight: FontWeight.bold,
                                    ),
                                  ),
                                  const SizedBox(height: 20),
                                  ZupPrimaryButton(
                                    title: "Get Started (Soon)",
                                    onPressed: null,
                                    isTrailingIcon: true,
                                    height: 40,
                                    fixedIcon: true,
                                    icon: Assets.icons.arrowRight.svg(),
                                  ),
                                  if (constraints.maxWidth > 600)
                                    const SizedBox(height: 40),
                                ],
                              ),
                            ),
                            if (constraints.maxWidth > 800)
                              Transform.scale(
                                scale: 1.3,
                                child: Assets.images.cryptosExchanges.image(
                                    height: constraints.maxWidth > 1000
                                        ? 400
                                        : 300),
                              ),
                          ],
                        ),
                        if (constraints.maxWidth > 600)
                          Assets.icons.brasilArgentinaColors.svg(
                            fit: BoxFit.fill,
                          )
                      ],
                    ),
                  ),
                ),
              ),
            ),
            SliverToBoxAdapter(
              child: Padding(
                padding: const EdgeInsets.all(50).copyWith(
                  bottom: 0,
                ),
                child: SizedBox(
                  height: 150,
                  child: Column(
                    children: [
                      const Center(
                        child: Text(
                          "Built by Liquidity Providers, for Liquidity Providers.",
                          textAlign: TextAlign.center,
                          style: TextStyle(
                            fontSize: 18,
                            color: ZupColors.brand,
                          ),
                        ),
                      ),
                      const SizedBox(height: 30),
                      Row(
                        crossAxisAlignment: CrossAxisAlignment.center,
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          ZupLightButton(
                            child: Assets.logos.x.svg(height: 28),
                            onPressed: () => launchUrl(
                              Uri.parse("https://x.com/zup_protocol"),
                            ),
                          ),
                          const SizedBox(width: 30),
                          ZupLightButton(
                            child: Assets.logos.telegram.svg(height: 28),
                            onPressed: () => launchUrl(
                              Uri.parse("https://t.me/zupprotocol"),
                            ),
                          ),
                          const SizedBox(width: 30),
                          ZupLightButton(
                            child: Assets.logos.github.svg(height: 28),
                            onPressed: () => launchUrl(
                              Uri.parse("https://github.com/zup-protocol"),
                            ),
                          ),
                        ],
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ],
        );
      }),
    );
  }
}
