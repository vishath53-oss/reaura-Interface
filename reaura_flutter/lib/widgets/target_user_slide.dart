import 'package:flutter/material.dart';
import '../theme/app_theme.dart';

class TargetUserSlide extends StatefulWidget {
  final double parallaxOffset;
  
  const TargetUserSlide({super.key, required this.parallaxOffset});

  @override
  State<TargetUserSlide> createState() => _TargetUserSlideState();
}

class _TargetUserSlideState extends State<TargetUserSlide> {
  int? expandedIndex;

  final List<Map<String, dynamic>> cards = [
    {
      "title": "Deaf Users",
      "icon": Icons.hearing,
      "color": AppTheme.primary,
      "items": [
        "Supports non-audio-based computer interaction",
        "Enables interaction through hand gestures and Morse input",
        "Reduces dependence on spoken communication"
      ]
    },
    {
      "title": "Non-Speaking Users",
      "icon": Icons.chat_bubble_outline,
      "color": AppTheme.pinkAccent,
      "items": [
        "Provides alternative text-input methods",
        "Allows communication through Morse-based typing",
        "Helps users interact without voice commands"
      ]
    },
    {
      "title": "Users with Limited Mobility",
      "icon": Icons.accessibility,
      "color": AppTheme.cyanAccent,
      "items": [
        "Enables hands-free computer control",
        "Supports gesture-based cursor movement",
        "Reduces dependence on traditional mouse and keyboard use"
      ]
    },
    {
      "title": "Assistive Technology Orgs",
      "icon": Icons.handshake,
      "color": AppTheme.primary,
      "items": [
        "Useful for special education institutions",
        "Rehabilitation and accessibility centers",
        "NGOs and organizations supporting disabled users"
      ]
    },
  ];

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      height: double.infinity,
      decoration: const BoxDecoration(
        color: AppTheme.backgroundLight,
      ),
      child: Stack(
        alignment: Alignment.center,
        children: [
          // Background parallax element
          Transform.translate(
            offset: Offset(widget.parallaxOffset * 300, widget.parallaxOffset * 300),
            child: Opacity(
              opacity: 0.3,
              child: Container(
                width: 900,
                height: 900,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: AppTheme.secondaryBackground,
                ),
              ),
            ),
          ),
          
          // Foreground content parallax
          Transform.translate(
            offset: Offset(0, widget.parallaxOffset * -100),
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 40.0),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Text(
                    'Target User',
                    style: TextStyle(
                      color: AppTheme.primary,
                      fontWeight: FontWeight.bold,
                      letterSpacing: 2,
                    ),
                  ),
                  const SizedBox(height: 16),
                  Text(
                    'Creating a More Accessible Digital World',
                    style: Theme.of(context).textTheme.displayMedium,
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 48),
                  
                  // 2x2 Grid of Accordions
                  SizedBox(
                    width: 1000,
                    child: GridView.builder(
                      shrinkWrap: true,
                      physics: const NeverScrollableScrollPhysics(),
                      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                        crossAxisCount: 2,
                        crossAxisSpacing: 32,
                        mainAxisSpacing: 32,
                        childAspectRatio: 1.5, // approximate fit, AnimatedSize handles content
                      ),
                      itemCount: cards.length,
                      itemBuilder: (context, index) {
                        return _buildAccordionCard(index);
                      },
                    ),
                  )
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildAccordionCard(int index) {
    final card = cards[index];
    final isOpen = expandedIndex == index;
    final color = card["color"] as Color;
    
    // Parallax staggering for cards
    double yOffset = (index % 2 == 0) ? widget.parallaxOffset * -50 : widget.parallaxOffset * 50;

    return Transform.translate(
      offset: Offset(0, yOffset),
      child: MouseRegion(
        cursor: SystemMouseCursors.click,
        child: GestureDetector(
          onTap: () {
            setState(() {
              expandedIndex = isOpen ? null : index;
            });
          },
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 300),
            curve: Curves.easeInOut,
            padding: const EdgeInsets.all(32),
            decoration: BoxDecoration(
              color: AppTheme.cardColor,
              borderRadius: BorderRadius.circular(24),
              border: Border.all(color: AppTheme.borderLight),
              boxShadow: [
                BoxShadow(
                  color: Colors.black.withOpacity(isOpen ? 0.1 : 0.05),
                  blurRadius: isOpen ? 30 : 20,
                  offset: Offset(0, isOpen ? 15 : 10),
                )
              ]
            ),
            child: SingleChildScrollView(
              physics: const NeverScrollableScrollPhysics(),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisSize: MainAxisSize.min,
                children: [
                  Row(
                    mainAxisAlignment: MainAxisAlignment.spaceBetween,
                    children: [
                      Row(
                        children: [
                          Container(
                            padding: const EdgeInsets.all(16),
                            decoration: BoxDecoration(
                              color: color.withOpacity(0.1),
                              borderRadius: BorderRadius.circular(16),
                            ),
                            child: Icon(card["icon"], color: color, size: 28),
                          ),
                          const SizedBox(width: 24),
                          Text(
                            card["title"],
                            style: Theme.of(context).textTheme.titleLarge,
                          ),
                        ],
                      ),
                      AnimatedRotation(
                        turns: isOpen ? 0.5 : 0,
                        duration: const Duration(milliseconds: 300),
                        child: Container(
                          padding: const EdgeInsets.all(8),
                          decoration: BoxDecoration(
                            color: AppTheme.borderLight.withOpacity(0.3),
                            shape: BoxShape.circle,
                          ),
                          child: const Icon(Icons.keyboard_arrow_down, color: AppTheme.bodyText),
                        ),
                      )
                    ],
                  ),
                  AnimatedSize(
                    duration: const Duration(milliseconds: 300),
                    curve: Curves.easeInOut,
                    child: Container(
                      height: isOpen ? null : 0,
                      clipBehavior: Clip.hardEdge,
                      decoration: const BoxDecoration(),
                      child: Padding(
                        padding: const EdgeInsets.only(top: 24.0),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: (card["items"] as List<String>).map((item) {
                            return Padding(
                              padding: const EdgeInsets.only(bottom: 12.0),
                              child: Row(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  const Icon(Icons.check_circle_outline, color: AppTheme.primary, size: 20),
                                  const SizedBox(width: 12),
                                  Expanded(
                                    child: Text(
                                      item,
                                      style: Theme.of(context).textTheme.bodyMedium,
                                    ),
                                  ),
                                ],
                              ),
                            );
                          }).toList(),
                        ),
                      ),
                    ),
                  )
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
