import 'package:flutter/material.dart';

class WinnerCard extends StatelessWidget {
  final String name;
  final String prize;
  final String image;
  final String position;

  const WinnerCard({
    super.key,
    required this.name,
    required this.prize,
    required this.image,
    required this.position,
  });

  @override
  Widget build(BuildContext context) {
    final theme = Theme.of(context);

    return Row(
      crossAxisAlignment: CrossAxisAlignment.center,
      children: [
        CircleAvatar(
          radius: 30, 
          backgroundImage: NetworkImage(image),
          onBackgroundImageError: (exception, stackTrace) {
            // Fallback handled below
          },
          child: ClipOval(
            child: Image.network(
              image,
              fit: BoxFit.cover,
              errorBuilder: (context, error, stackTrace) {
                return Container(
                  color: Colors.red,
                  alignment: Alignment.center,
                  child: const Icon(Icons.person, color: Colors.white, size: 30),
                );
              },
              loadingBuilder: (context, child, loadingProgress) {
                if (loadingProgress == null) return child;
                return const CircularProgressIndicator();
              },
            ),
          ),
        ),
        const SizedBox(width: 16), // Matches Tamagui's gap="$4"
        Expanded(
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    name,
                    style: theme.textTheme.titleLarge?.copyWith(fontSize: 18), // Matches size="$6"
                  ),
                  Text(
                    'won $prize',
                    style: theme.textTheme.bodyMedium?.copyWith(
                      color: theme.textTheme.bodyMedium?.color?.withOpacity(0.7),
                      fontSize: 16, // Matches size="$5"
                    ),
                  ),
                ],
              ),
              Text(
                position,
                style: theme.textTheme.bodyMedium?.copyWith(fontSize: 16), // Matches size="$5"
              ),
            ],
          ),
        ),
      ],
    );
  }
}