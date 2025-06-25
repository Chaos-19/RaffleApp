import 'package:flutter/material.dart';
import 'package:myapp/views/widgets/winner_card.dart';


class WinnersScreen extends StatelessWidget {
  const WinnersScreen({super.key});

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);
    final winners = [
      {
        'name': 'Ethan Carter',
        'prize': 'Luxury Watch',
        'position': '1st Place',
        'image': 'assets/images/image.png',
      },
      {
        'name': 'Sophia Bennett',
        'prize': 'Travel Voucher',
        'position': '2nd Place',
        'image': 'assets/images/image.png',
      },
      {
        'name': 'Liam Harper',
        'prize': 'Tech Gadget Bundle',
        'position': '3rd Place',
        'image': 'assets/images/image.png',
      },
    ];

    return Scaffold(
      backgroundColor: theme.scaffoldBackgroundColor,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16.0),
          child: ListView(
            children: [
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 12.0),
                child: Column(
                  children: [
                    Text(
                      'Congratulations to Our Recent Winners!',
                      style: theme.textTheme.headlineSmall?.copyWith(fontSize: 24),
                      textAlign: TextAlign.center,
                    ),
                    const SizedBox(height: 12),
                    Text(
                      'Check out the lucky individuals who have won amazing prizes in our recent raffles. Your name could be here next!',
                      style: theme.textTheme.bodyMedium?.copyWith(fontSize: 14),
                      textAlign: TextAlign.center,
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 16),
              ...winners.asMap().entries.map((entry) {
                return Padding(
                  padding: const EdgeInsets.only(bottom: 7.0),
                  child: WinnerCard(
                    name: entry.value['name']!,
                    prize: entry.value['prize']!,
                    image: entry.value['image']!,
                    position: entry.value['position']!,
                  ),
                );
              }),
            ],
          ),
        ),
      ),
    );
  }
}