import 'package:flutter/material.dart';
import '../theme/app_theme.dart';

class InvestorsSlide extends StatefulWidget {
  final double parallaxOffset;
  
  const InvestorsSlide({super.key, required this.parallaxOffset});

  @override
  State<InvestorsSlide> createState() => _InvestorsSlideState();
}

class _InvestorsSlideState extends State<InvestorsSlide> {
  int? expandedIndex;

  final List<Map<String, dynamic>> categories = [
    {
      "title": "Assistive Technology Investors",
      "icon": Icons.handshake,
      "color": AppTheme.primary,
      "items": [
        "Investors focused on accessibility and inclusive innovation",
        "Support for developing affordable assistive computer interfaces"
      ]
    },
    {
      "title": "Healthcare & Rehab Orgs",
      "icon": Icons.monitor_heart,
      "color": AppTheme.purpleAccent,
      "items": [
        "Rehabilitation centers",
        "Assistive technology providers",
        "Organizations supporting people with physical disabilities"
      ]
    },
    {
      "title": "Special Education Institutions",
      "icon": Icons.school,
      "color": AppTheme.cyanAccent,
      "items": [
        "Schools for deaf and hard-of-hearing students",
        "Special education institutions",
        "Inclusive learning centers"
      ]
    },
    {
      "title": "NGOs & Disability Support",
      "icon": Icons.public,
      "color": AppTheme.primary,
      "items": [
        "Organizations working for disability inclusion",
        "Foundations supporting communication and accessibility",
        "Social-impact technology programs"
      ]
    },
    {
      "title": "Government & Social-Impact",
      "icon": Icons.account_balance,
      "color": AppTheme.purpleAccent,
      "items": [
        "Government accessibility initiatives",
        "Digital inclusion programs",
        "Innovation and social-impact funding schemes"
      ]
    }
  ];

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      height: double.infinity,
      decoration: const BoxDecoration(
        color: AppTheme.secondaryBackground,
      ),
      child: Stack(
        alignment: Alignment.center,
        children: [
          // Background parallax element
          Transform.translate(
            offset: Offset(widget.parallaxOffset * -200, widget.parallaxOffset * -300),
            child: Opacity(
              opacity: 0.4,
              child: Container(
                width: 700,
                height: 700,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: AppTheme.primary.withOpacity(0.05),
                ),
              ),
            ),
          ),
          
          // Foreground content
          Transform.translate(
            offset: Offset(0, widget.parallaxOffset * -150),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  'Potential Investors & Supporters',
                  style: TextStyle(
                    color: AppTheme.primary,
                    fontWeight: FontWeight.bold,
                    letterSpacing: 2,
                  ),
                ),
                const SizedBox(height: 16),
                Text(
                  'Partnering to Build a\nMore Accessible Future',
                  style: Theme.of(context).textTheme.displayMedium,
                  textAlign: TextAlign.center,
                ),
                const SizedBox(height: 48),
                
                // Horizontal scrolling list of Accordions
                SizedBox(
                  height: 400, // Fixed height for horizontal scroll container
                  child: ListView.builder(
                    scrollDirection: Axis.horizontal,
                    padding: const EdgeInsets.symmetric(horizontal: 40),
                    itemCount: categories.length,
                    itemBuilder: (context, index) {
                      return Padding(
                        padding: const EdgeInsets.only(right: 24.0),
                        child: _buildAccordionCard(index),
                      );
                    },
                  ),
                ),
                
                const SizedBox(height: 48),
                Text(
                  '“Together, we can make digital interaction more accessible for everyone.”',
                  style: Theme.of(context).textTheme.titleLarge,
                ),
                const SizedBox(height: 32),
                ElevatedButton(
                  onPressed: () {},
                  style: ElevatedButton.styleFrom(
                    padding: const EdgeInsets.symmetric(horizontal: 40, vertical: 24),
                    backgroundColor: AppTheme.primary,
                  ),
                  child: const Row(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text('Partner With Reaura', style: TextStyle(fontSize: 18)),
                      SizedBox(width: 12),
                      Icon(Icons.arrow_forward),
                    ],
                  ),
                )
              ],
            ),
          ),
        ],
      ),
    );
  }

  Widget _buildAccordionCard(int index) {
    final category = categories[index];
    final isOpen = expandedIndex == index;
    final color = category["color"] as Color;

    return MouseRegion(
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
          width: 350,
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
                    Container(
                      padding: const EdgeInsets.all(16),
                      decoration: BoxDecoration(
                        color: color.withOpacity(0.1),
                        borderRadius: BorderRadius.circular(16),
                      ),
                      child: Icon(category["icon"], color: color, size: 28),
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
                const SizedBox(height: 24),
                Text(
                  category["title"],
                  style: Theme.of(context).textTheme.titleLarge,
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
                        children: (category["items"] as List<String>).map((item) {
                          return Padding(
                            padding: const EdgeInsets.only(bottom: 12.0),
                            child: Row(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Container(
                                  width: 6,
                                  height: 6,
                                  margin: const EdgeInsets.only(top: 8),
                                  decoration: const BoxDecoration(
                                    color: AppTheme.primary,
                                    shape: BoxShape.circle,
                                  ),
                                ),
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
    );
  }
}
