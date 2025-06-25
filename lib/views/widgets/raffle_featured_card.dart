import 'package:flutter/material.dart';


class RaffleFeaturedCard extends StatelessWidget {
  final String? title;
  final String? description;
  final String? img;
  final String id;

  const RaffleFeaturedCard({
    super.key,
    this.title,
    this.description,
    this.img,
    required this.id,
  });

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        Navigator.pushNamed(context, '/raffles/$id');
      },
      child: Card(
        child: ClipRect(
          child: SizedBox(
            width: 250,
            height: 242, // Match the parent constraint
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                ClipRRect(
                  borderRadius: const BorderRadius.vertical(top: Radius.circular(8)),
                  child: Image.asset(
                    img ?? 'assets/images/image.png',
                    width: double.infinity,
                    height: 140, // Reduced to fit within 242px
                    fit: BoxFit.contain,
                    errorBuilder: (context, error, stackTrace) {
                      return Image.asset(
                        'assets/images/image.png',
                        width: double.infinity,
                        height: 140,
                        fit: BoxFit.contain,
                      );
                    },
                  ),
                ),
                Expanded(
                  child: Padding(
                    padding: const EdgeInsets.all(8.0),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        Text(
                          title ?? 'No Title',
                          style: Theme.of(context).textTheme.titleLarge,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                        ),
                        const SizedBox(height: 4),
                        Expanded(
                          child: Text(
                            description ?? 'No Description',
                            style: Theme.of(context).textTheme.bodyMedium?.copyWith(
                                  color: Theme.of(context).textTheme.bodyMedium?.color?.withOpacity(0.7),
                                ),
                            maxLines: 2,
                            overflow: TextOverflow.ellipsis,
                          ),
                        ),
                      ],
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}