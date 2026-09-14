import 'package:flutter/material.dart';
import '../widgets/hero_slide.dart';
import '../widgets/services_slide.dart';
import '../widgets/target_user_slide.dart';
import '../widgets/investors_slide.dart';
import '../theme/app_theme.dart';

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  late PageController _pageController;

  final List<Widget Function(double offset)> _slides = [
    (offset) => HeroSlide(parallaxOffset: offset),
    (offset) => ServicesSlide(parallaxOffset: offset),
    (offset) => TargetUserSlide(parallaxOffset: offset),
    (offset) => InvestorsSlide(parallaxOffset: offset),
  ];

  @override
  void initState() {
    super.initState();
    _pageController = PageController();
  }

  @override
  void dispose() {
    _pageController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      extendBodyBehindAppBar: true,
      appBar: AppBar(
        backgroundColor: Colors.white.withOpacity(0.8),
        elevation: 0,
        title: Row(
          children: [
            Image.asset('assets/hero.png', height: 40),
            const SizedBox(width: 12),
            Text(
              'Reaura',
              style: TextStyle(
                color: AppTheme.mainHeading,
                fontWeight: FontWeight.bold,
                fontSize: 24,
              ),
            ),
          ],
        ),
        actions: [
          TextButton(
            onPressed: () {},
            child: const Text('Home', style: TextStyle(color: AppTheme.bodyText, fontWeight: FontWeight.bold)),
          ),
          TextButton(
            onPressed: () {},
            child: const Text('About', style: TextStyle(color: AppTheme.bodyText, fontWeight: FontWeight.bold)),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: ElevatedButton(
              onPressed: () {},
              child: const Text('Get Started'),
            ),
          )
        ],
      ),
      body: PageView.builder(
        scrollDirection: Axis.vertical,
        controller: _pageController,
        itemCount: _slides.length,
        itemBuilder: (context, index) {
          return AnimatedBuilder(
            animation: _pageController,
            builder: (context, child) {
              double pageOffset = 0.0;
              if (_pageController.position.haveDimensions) {
                pageOffset = _pageController.page! - index;
              }
              // pageOffset is 0 when the page is fully in view, -1 when it's above, 1 when it's below.
              return _slides[index](pageOffset);
            },
          );
        },
      ),
    );
  }
}
