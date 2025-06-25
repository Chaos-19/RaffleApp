import 'package:flutter/material.dart';
import '../../core/constants/raffle_data.dart';

class RaffleCard extends StatelessWidget {
  final String? title;
  final String? description;
  final String? img;
  final DateTime? startDate;
  final String id;
  final DateTime? endDate;

  const RaffleCard({
    super.key,
    this.title,
    this.description,
    this.img,
    this.startDate,
    this.endDate,
    required this.id,
  });

  @override
  Widget build(BuildContext context) {
    final daysLeft =
        startDate != null ? RaffleAppData.getDaysLeft(startDate!) : 0;

    return Card(
      child: Container(
        width: MediaQuery.of(context).size.width * 0.97,
        padding: const EdgeInsets.symmetric(vertical: 8.0),
        margin: const EdgeInsets.symmetric(vertical: 4.0, horizontal: 4.0),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Expanded(
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: 8.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          'Ends in $daysLeft days',
                          style: Theme.of(
                            context,
                          ).textTheme.bodyMedium?.copyWith(
                            color: Theme.of(
                              context,
                            ).textTheme.bodyMedium?.color?.withOpacity(0.7),
                          ),
                        ),
                        const SizedBox(height: 4),
                        Text(
                          title ?? 'No Title',
                          style: Theme.of(context).textTheme.titleLarge,
                        ),
                        const SizedBox(height: 4),
                        Text(
                          description ?? 'No Description',
                          style: Theme.of(
                            context,
                          ).textTheme.bodyMedium?.copyWith(
                            color: Theme.of(
                              context,
                            ).textTheme.bodyMedium?.color?.withOpacity(0.7),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 12),
                    Padding(
                      padding: const EdgeInsets.only(bottom: 8.0),
                      child: ElevatedButton(
                        onPressed: () {
                          Navigator.pushNamed(context, '/raffles/$id');
                        },
                        child: const Text('Join Raffle'),
                      ),
                    ),
                  ],
                ),
              ),
            ),
            Expanded(
              child: ClipRRect(
                borderRadius: BorderRadius.circular(8.0),
                child: Image.network(
                  img ?? 'https://via.placeholder.com/250x160',
                  height: 160,
                  width: double.infinity,
                  fit: BoxFit.cover,
                  errorBuilder: (context, error, stackTrace) {
                    return Image.asset(
                      'assets/images/image.png',
                      height: 160,
                      width: double.infinity,
                      fit: BoxFit.cover,
                    );
                  },
                  loadingBuilder: (context, child, loadingProgress) {
                    if (loadingProgress == null) return child;
                    return const Center(child: CircularProgressIndicator());
                  },
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
