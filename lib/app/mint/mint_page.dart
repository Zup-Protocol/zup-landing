import 'package:flutter/material.dart';
import 'package:webview_flutter/webview_flutter.dart';
import 'package:zup_ui_kit/zup_colors.dart';

class MintNFTPage extends StatefulWidget {
  const MintNFTPage({super.key});

  @override
  State<MintNFTPage> createState() => _MintNFTPageState();
}

class _MintNFTPageState extends State<MintNFTPage> {
  WebViewController? controller;

  @override
  void initState() {
    controller = WebViewController()
      ..loadRequest(Uri.parse('https://zup-genesis-collection.nfts2.me'));

    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: ZupColors.white,
      body: SizedBox(
        child: WebViewWidget(controller: controller!),
      ),
    );
  }
}
